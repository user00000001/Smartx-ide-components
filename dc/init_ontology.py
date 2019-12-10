from typing import Generator
import logging
from ontology.sdk import Ontology
from ontology.account.account import Account
from ontology.wallet.wallet_manager import WalletManager
from ontology.contract.native.ontid import Attribute, OntId
from ontology.core.transaction import Transaction, TransactionType

account_and_ontid = {
    "100": {
        "account": "AXKnGhh9WyoB1G5aXHDdzgSq4Zv3CJRNNs",
        "account_hex": "03c5e12f54e1104ce5fb9a10c32850776864b03e6bc2ff2285efbb1abb9d9ba36a",
        "account_password": "1qaz",
        "ontid": "did:ont:TYhUu9bidgc7MbkWeS55sywjct5VYrqxdW",
        "ontid_account": "AYyvrwLLpruzDhWtv6QA15ELWqLuVYkgSP",
        "ontid_account_hex": "03759c26d44b808f6a6fe9a34193da728acb493c8cf51b012a9589e517f92bbbaa",
        "ontid_account_password": "1qaz"
    },
    "101": {
        "account": "AbLD3PEEg8ohKX2QP5YUoA8hj4hgnaKH5d",
        "account_hex": "031dadf8fa327b9cc4c03bb8796d32c7048695b574cf37d7d4d30c6647958cddc9",
        "account_password": "1qaz",
        "ontid": "did:ont:TCUcjRF77rqcnE8fhgNTbKWvULEFq5A37Q",
        "ontid_account": "AcvtaTU86uLDyVjyRThMQyXbDS5hRbyUzm",
        "ontid_account_hex": "03cd60c84f51a65a74a0f77dd00d6013fe64887dd7dd7c77be0726076098623d35",
        "ontid_account_password": "1qaz"
    },
    "102": {
        "account": "AQ31oFNS9HYtXYk4tAzajrZYCRQQRBBzcr",
        "account_hex": "0247cecfbdfb75ed9da031196dde8579d3f0df3f13fca05a82ab708c43b1fa9b5b",
        "account_password": "1qaz",
        "ontid": "did:ont:TW7QpXNcu8dVNCXXsBq8Z1GPmN7LdxFjp7",
        "ontid_account": "ARmHLUGVe4QSi9ctJxFRxc3AERe4D9xVBe",
        "ontid_account_hex": "03623d9e73830ba92140e6b157660b400ab6680543f245c16cb29eb0eca95c5d78",
        "ontid_account_password": "1qaz"
    },
    "103": {
        "account": "AboGDWUUkP2J6msQh9GhXgPvupdbzmkE2G",
        "account_hex": "020a3da2aa5a5ccead145088e60a2897ebf1834a01445ff71fc6dc651b9a078709",
        "account_password": "1qaz",
        "ontid": "did:ont:TWh81S27h6dJ5JEmr6Nt3rAt8Z16KaaASD",
        "ontid_account": "AcAqT2NhpEza5rMABTvQ8bZ7aqwQsYvd6w",
        "ontid_account_hex": "0319c8f66265125ef161f3c23c330f44ac94894cb35f8b2213d58969e75deb629f",
        "ontid_account_password": "1qaz"
    },
    "104": {
        "account": "Ab6YW8QKuVD3FVi3sUL1vu5fd2ge2KLVjC",
        "account_hex": "02cb0af023e79618fefa1dcc75cce869f67a31c1e316b5b2d6fd98e58984befdec",
        "account_password": "1qaz",
        "ontid": "did:ont:TNDCcuqwhbehzXRBUSCn2RjxiFCWifGodr",
        "ontid_account": "AL2SvfaJS3MSY6Kf2CXq9FkVtyBx6WYLvw",
        "ontid_account_hex": "027779dc9dfc47ff1f5a7c4a15d2189a661f7bd4dbef841411736209d61a05d9d4",
        "ontid_account_password": "1qaz"
    },
    "105": {
        "account": "ATErqzubJQxVtbHBVJJUfAahtqDmqt8Nkc",
        "account_hex": "027e910e3ae3605307d25617a2cf5b04605d7d7d0e6ad87a92fc8437fe9186e9fc",
        "account_password": "1qaz",
        "ontid": "did:ont:TAevG6sftG8MigLMioEBR4Uv26ey4PDxyk",
        "ontid_account": "ANWrfBELMbmJmU1sp8nAL4Ywg1YN7pB3xN",
        "ontid_account_hex": "02ac2f18b58cbdb46fa72b55e022290d77ebd0e8ac7c2cab8f3ab078baa54aca4c",
        "ontid_account_password": "1qaz"
    },
    "106": {
        "account": "Aafm5VJy8eiquJ7cthfvw2fPxsrwjT2Ucq",
        "account_hex": "02d7c46aaa3badb0f0f36434c6c6c5b823e11266c6d0febd63e0fb097d3eb7d5ac",
        "account_password": "1qaz",
        "ontid": "did:ont:TLjFWse1EpPRqSGfqXK2jvMdEutrMGPbAH",
        "ontid_account": "ANLCCFzfyhWGKZQketMGcBrnniQHbTUHTA",
        "ontid_account_hex": "032efc30ba2924e652ade41b273cc94774a66f23ef33c4ac423878992c50cb1b74",
        "ontid_account_password": "1qaz"
    },
}
base_path = "/home/ubuntu/Downloads/ontology_data/"

def warning(*result):
    for i in result:
        if isinstance(i, (list, tuple, Generator)):
            list(map(warning, i))
        else:
            logging.warning(i)

def register_ontid():
    for basename in account_and_ontid.keys():
        sdk = Ontology()
        sdk.rpc.set_address("http://localhost:25768")
        wallet_path = base_path + basename + "/wallet.dat"
        sdk.wallet_manager.open_wallet(wallet_path)
        ontid = sdk.native_vm.ont_id()
        account_info = account_and_ontid.get(basename)
        account = sdk.wallet_manager.get_account_by_b58_address(
            account_info.get("account"), 
            account_info.get("account_password")
        )
        yield ontid.registry_ont_id(
            ont_id=account_info.get("ontid"),
            ctrl_acct=account,
            payer=account,
            gas_price=0,
            gas_limit=50000
        )

def register_check():
    for basename in account_and_ontid.keys():
        sdk = Ontology()
        sdk.rpc.set_address("http://localhost:25768")
        wallet_path = base_path + basename + "/wallet.dat"
        sdk.wallet_manager.open_wallet(wallet_path)
        ontid = sdk.native_vm.ont_id()
        account_info = account_and_ontid.get(basename)
        yield (account_info.get("account"), ontid.get_ddo(ont_id=account_info.get("ontid")))


def main():
    warning(register_ontid())
    warning(register_check())


if __name__ == "__main__":
    main()