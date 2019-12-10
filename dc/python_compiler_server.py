import os
import json
os.sys.path.append("/home/ubuntu/ws/go/src/github.com/ontio/ontology-python-compiler")
import sanic
import tempfile
import functools
import subprocess
from ontology.compiler import Compiler


tmp_exts = (
    ".abi.json",
    ".debug.json",
    ".Func.Map",
    ".avm",
    ".avm.str",
    ".warning"
)

app = sanic.Sanic(__name__)
api = sanic.Blueprint(
    "api",
    url_prefix="/api"
)
v2_0 = sanic.Blueprint(
    "v2.0",
    url_prefix="/v2.0"
)

app_v2_0_list = api.group(v2_0, url_prefix=api.url_prefix)

def read_value(data: dict, path, key: str):
    if key in ["abi", "debug", "funcmap", "opcode"]:
        with open(path, "r") as fp:
            content = fp.read()
            try:
                data[key] = json.dumps(json.loads(content))
            except json.JSONDecodeError:
                data[key] = content
    elif key in ["avm"]:
        with open(path, "rb") as fp:
            data[key] = "{}".format(fp.read())
    else:
        pass


def deletedebugfile(filename, strs):
    '''
    Deletes the files ending with the suffix
    '''
    d_file = filename.replace(".py", strs)
    if os.path.isfile(d_file):
        subprocess.call(["rm", d_file])

@v2_0.route("/python/compile", methods=frozenset({"GET", "POST"}))
async def compile(request):
    if request.json.get("type") != "Python":
        return sanic.response.text("Not A Available Code Type. ")
    else:
        pycode = request.json.get("code")
        tmpfile = tempfile.NamedTemporaryFile(mode="w")
        tmp_name = tmpfile.name + ".py"
        fp = open(tmp_name, mode="wb+")
        fp.write(pycode.encode())
        fp.flush()
        compiler = Compiler.Compile(tmp_name)
        bak = os.sys.stdout
        os.sys.stdout = tmpfile.file
        compiler.DumpAsm()
        os.sys.stdout.flush()
        os.sys.stdout = bak
        data = {
            "abi": "",
            "avm": "",
            "debug": "",
            "errorcode": 0,
            "funcmap": "",
            "opcode": ""
        }
        read_value(data, tmpfile.name + ".abi.json", "abi")
        read_value(data, tmpfile.name + ".avm.str", "avm")
        read_value(data, tmpfile.name + ".Func.Map", "funcmap")
        read_value(data, tmpfile.name + ".debug.json", "debug")
        read_value(data, tmpfile.name, "opcode")
        _deletedebugfile = functools.partial(deletedebugfile, tmp_name)
        list(map(_deletedebugfile, tmp_exts))
        tmpfile.close()
        fp.close()
        deletedebugfile(tmp_name, ".py")
        # return sanic.response.text(
        #     "{}".format(data), 
        #     headers={
        #         "Access-Control-Allow-Origin": "*"
        #     },
        #     content_type="text/html; charset=UTF-8"
        # )
        return sanic.response.json(
            data, 
            headers={
                "Access-Control-Allow-Origin": "*"
            }
        )

def update_data(data: dict, key: str, ext: str):
    pass

@app.exception(sanic.exceptions.NotFound)
async def errors_404(request, execption):
    return sanic.response.text("404 ERROR. ", status=404)

def main():
    app.register_blueprint(app_v2_0_list)
    app.run(
        host="0.0.0.0",
        port=8000,
        # debug=True
    )

if __name__ == "__main__":
    main()