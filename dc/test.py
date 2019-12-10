import logging
from ontology.sdk import Ontology
from ontology.account.account import Account
from ontology.wallet.wallet_manager import WalletManager
from ontology.contract.native.ontid import Attribute
from ontology.core.transaction import Transaction, TransactionType

def warning(*result):
    for i in result:
        logging.warning(i)

sdk = Ontology()
sdk.rpc.set_address("http://localhost:25768")
ont_id = "did:ont:AXKnGhh9WyoB1G5aXHDdzgSq4Zv3CJRNNs"
result = f"{sdk.native_vm.ont_id().get_public_keys(ont_id)}"
result = f"{sdk.native_vm.ont_id().get_ddo(ont_id)}"
result1 = f'{sdk.native_vm.ont().balance_of("AXKnGhh9WyoB1G5aXHDdzgSq4Zv3CJRNNs")}'
warning(result, result1)
aa = sdk.native_vm.ont_id()
wallet_path = "/home/ubuntu/Downloads/ontology_data/100/wallet.json"
sdk.wallet_manager.open_wallet(wallet_path)
ab = sdk.wallet_manager.get_account_by_b58_address(
    "AXKnGhh9WyoB1G5aXHDdzgSq4Zv3CJRNNs", 
    "1qaz"
)
Id = "AXKnGhh9WyoB1G5aXHDdzgSq4Zv3CJRNNs"
# Id = "AbLD3PEEg8ohKX2QP5YUoA8hj4hgnaKH5d"
# Id = "AQ31oFNS9HYtXYk4tAzajrZYCRQQRBBzcr"
# Id = "AboGDWUUkP2J6msQh9GhXgPvupdbzmkE2G"
# Id = "Ab6YW8QKuVD3FVi3sUL1vu5fd2ge2KLVjC"
# Id = "ATErqzubJQxVtbHBVJJUfAahtqDmqt8Nkc"
# Id = "Aafm5VJy8eiquJ7cthfvw2fPxsrwjT2Ucq"
ac = sdk.wallet_manager.get_account_by_b58_address(
    Id,
    "1qaz"
)
# aa.registry_ont_id(
#     "did:ont:AboGDWUUkP2J6msQh9GhXgPvupdbzmkE2G", 
#     ab,
#     ac,
#     0,
#     50000
# )
# aa.add_public_key(
#     "did:ont:AXKnGhh9WyoB1G5aXHDdzgSq4Zv3CJRNNs", 
#     ab,
#     ac.get_public_key_hex(),
#     ac,
#     0,
#     50000
# )

# aa.add_attribute(
#     ont_id,
#     ab,
#     Attribute("myattr", "str", Id),
#     ac,
#     0,
#     50000
# )
# aa.remove_attribute(
#     ont_id,
#     ab,
#     "myattr",
#     ac,
#     0,
#     50000
# )

# warning(aa.parse_attributes("6d7961747472"))

# ong = sdk.native_vm.ong()
# aaa = ong.withdraw(
#     claimer=ab,
#     receiver=Id,
#     payer=ab,
#     amount=int(5000*1e9),
#     gas_price=0,
#     gas_limit=50000
# )
# warning(aaa)

ont = sdk.neo_vm.oep5()
warning(ont.balance_of(ac.get_address()))