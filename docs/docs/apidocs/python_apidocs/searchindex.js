Search.setIndex({"docnames": ["BUILD", "CHANGELOG", "acknowledgments", "api_reference", "examples", "index", "message_properties", "queue_options_and_configuration", "user_guide"], "filenames": ["BUILD.md", "CHANGELOG.md", "acknowledgments.rst", "api_reference.rst", "examples.rst", "index.rst", "message_properties.rst", "queue_options_and_configuration.rst", "user_guide.rst"], "titles": ["Build instructions for the BlazingMQ Python SDK", "Changelog", "Acknowledgments", "API Reference", "Examples", "blazingmq", "Message Properties", "Queue Options and Configuration", "User Guide"], "terms": {"run": 0, "entir": 0, "test": [0, 4, 5, 8], "suit": 0, "all": [0, 3, 4, 5, 6, 8], "support": [0, 3], "interpret": 0, "architectur": 0, "i": [0, 1, 2, 3, 4, 5, 6, 7, 8], "difficult": [0, 4], "do": [0, 2, 3, 6, 7, 8], "should": [0, 1, 3, 7, 8], "alreadi": [0, 3, 7], "set": [0, 3, 4, 5, 6, 8], "up": [0, 3, 8], "github": 0, "action": [0, 3], "we": [0, 4, 6, 8], "advis": 0, "singl": [0, 3, 6, 7, 8], "version": [0, 3, 4, 8], "ci": 0, "other": [0, 3, 7, 8], "combin": 0, "your": [0, 3, 4, 6, 7, 8], "pull": 0, "request": [0, 2, 3], "see": [0, 3, 4, 8], "workflow": 0, "yaml": 0, "more": [0, 3, 4, 7, 8], "detail": [0, 3], "how": [0, 6], "The": [0, 3, 4, 6, 7, 8], "below": 0, "assum": [0, 8], "pyexec": 0, "python3": 0, "9": 0, "focu": 0, "linux": 0, "onli": [0, 3, 4, 8], "thi": [0, 1, 2, 3, 4, 6, 7, 8], "suffici": 0, "most": [0, 3, 7], "case": [0, 3, 7, 8], "befor": [0, 3, 4, 7, 8], "follow": [0, 3, 4, 6, 8], "ani": [0, 3, 4, 6, 7, 8], "sure": [0, 8], "git": 0, "clone": 0, "project": 0, "onto": 0, "host": [0, 3, 5], "machin": [0, 3, 4], "onc": [0, 3, 4, 8], "environ": 0, "properli": 0, "initi": [0, 3], "can": [0, 2, 3, 6, 7, 8], "built": 0, "tree": 0, "": [0, 3, 7], "directori": 0, "iter": 0, "quickli": 0, "howev": [0, 4, 6, 7, 8], "ha": [0, 2, 3, 4, 6, 8], "disadvantag": 0, "have": [0, 3, 6, 7, 8], "instal": [0, 6], "requir": [0, 3, 4, 8], "lint": 0, "depend": 0, "along": [0, 3, 8], "potenti": [0, 3], "accident": 0, "against": 0, "wrong": 0, "artifact": 0, "due": [0, 3], "For": [0, 6, 7, 8], "comprehens": 0, "self": 0, "contain": [0, 6, 8], "setup": 0, "specif": [0, 4], "l": [0, 4], "avail": [0, 7], "c": [0, 4], "provid": [0, 2, 3, 4, 6, 7, 8], "manylinux": 0, "sh": 0, "script": 0, "macosx": 0, "univers": 0, "environmen": 0, "when": [0, 3, 4, 6, 7, 8], "an": [0, 2, 3, 4, 6, 7, 8], "interact": [0, 3, 5], "command": 0, "line": 0, "prompt": 0, "you": [0, 1, 2, 3, 4, 6, 7, 8], "check": 0, "configur": [0, 3, 5, 8], "appropri": [0, 3, 6, 8], "variabl": 0, "mai": [0, 1, 3, 4, 7], "need": [0, 2, 3, 6, 7, 8], "prior": 0, "With": [0, 5], "broker": [0, 3, 4, 7, 8], "tcp": [0, 3], "localhost": [0, 3], "30114": [0, 3], "bmq_broker_uri": 0, "addit": [0, 8], "ar": [0, 3, 4, 6, 7, 8], "coverag": 0, "m": 0, "pip": 0, "r": [0, 4], "dev": 0, "txt": 0, "And": 0, "now": [0, 3], "abl": [0, 8], "examin": 0, "makefil": 0, "ini": 0, "file": [0, 1, 4], "understand": 0, "about": [0, 6, 8], "them": [0, 3], "note": [1, 4], "NOT": 1, "add": [1, 2], "new": [1, 3, 4, 7, 8], "chang": [1, 3], "log": [1, 3, 8], "entri": 1, "manag": [1, 8], "towncrier": 1, "edit": 1, "previou": 1, "fix": 1, "problem": [1, 3], "like": [1, 2, 3, 8], "typo": 1, "correct": [1, 4], "A": [2, 3, 4, 6], "produc": [2, 3, 5], "ensur": [2, 3, 8], "messag": [2, 4, 5, 8], "been": [2, 3, 4, 7, 8], "successfulli": [2, 3, 8], "post": [2, 3, 4, 5, 8], "being": [2, 3, 6, 8], "pass": [2, 3, 6, 8], "callabl": [2, 3], "on_ack": [2, 3, 4, 8], "paramet": [2, 3, 6, 8], "callback": [2, 3, 4, 6, 8], "alwai": [2, 3, 6], "get": [2, 3, 4, 8], "invok": [2, 3, 6, 8], "ack": [2, 3, 4, 5, 8], "us": [2, 3, 4, 5, 7, 8], "pattern": [2, 7, 8], "incom": [2, 3, 4, 8], "queue": [2, 3, 5, 8], "wait": [2, 3, 4, 8], "reciev": 2, "allow": [2, 3], "synchron": [2, 4], "session": [2, 4, 5, 6, 7, 8], "blazingmq": [2, 3, 4, 6, 7, 8], "import": [2, 4, 8], "from": [2, 3, 4, 5, 8], "queue_uri": [2, 3, 4, 5, 7, 8], "bmq": [2, 4, 8], "tutori": [2, 8], "workqueu": [2, 8], "example_queu": [2, 8], "session_ev": [2, 3, 4, 8], "log_session_ev": [2, 3, 4, 5, 8], "open_queu": [2, 3, 4, 5, 8], "write": [2, 3, 4, 8], "true": [2, 3, 4, 8], "1": [2, 6], "2": [2, 4, 7], "3": 2, "b": [2, 4, 8], "some": [2, 3, 6, 8], "here": [2, 6, 8], "put": [2, 3, 4], "statu": [2, 3, 4, 5, 8], "ackstatu": [2, 3, 4, 5, 8], "success": [2, 3, 4, 5, 8], "print": [2, 4, 8], "error": [2, 3, 5], "fail": [2, 3, 8], "els": [2, 4], "close_queu": [2, 3, 5, 8], "If": [2, 3, 6, 7, 8], "want": [2, 3, 6, 7, 8], "without": [2, 3, 4], "block": [2, 4, 8], "leverag": [2, 6], "functool": [2, 4], "partial": [2, 4], "bind": [2, 3], "recoveri": 2, "mechan": 2, "on_session_ev": [3, 8], "on_messag": [3, 4, 6, 8], "none": [3, 4, 5, 8], "message_compression_algorithm": 3, "compressionalgorithmtyp": [3, 5], "timeout": [3, 4, 5], "host_health_monitor": [3, 8], "sourc": 3, "repres": [3, 6], "connect": [3, 4, 5, 7, 8], "object": [3, 4, 6, 8], "manipul": 3, "modifi": 3, "state": [3, 8], "applic": [3, 4, 7, 8], "point": [3, 8], "view": 3, "includ": [3, 6, 8], "open": [3, 4, 7, 8], "start": [3, 4, 8], "stop": [3, 4, 5, 7, 8], "sessionev": [3, 5, 8], "process": [3, 4, 8], "receiv": [3, 4, 6, 7, 8], "option": [3, 4, 5, 6, 8], "messagehandl": [3, 4, 5, 8], "str": [3, 6], "address": 3, "default": [3, 6, 7, 8], "compress": 3, "appli": 3, "via": [3, 8], "float": 3, "maximum": 3, "number": 3, "second": [3, 6], "reason": 3, "union": 3, "basichealthmonitor": [3, 5, 8], "so": [3, 4], "control": [3, 8], "whether": [3, 8], "healthi": [3, 8], "call": [3, 7, 8], "set_healthi": [3, 5, 8], "set_unhealthi": [3, 5, 8], "instanc": [3, 8], "instead": 3, "hostunhealthi": [3, 5], "hosthealthrestor": [3, 5], "never": [3, 8], "emit": 3, "suspends_on_bad_host_health": [3, 4, 8], "queueoption": [3, 4, 5, 7, 8], "cannot": 3, "rais": [3, 8], "wa": [3, 4, 8], "brokertimeouterror": [3, 5], "didn": 3, "t": [3, 4, 8], "respond": 3, "within": [3, 8], "amount": 3, "time": [3, 4, 7], "valueerror": 3, "0": [3, 4, 7, 8], "close": [3, 8], "specifi": [3, 8], "after": [3, 4], "method": [3, 8], "return": [3, 8], "longer": [3, 8], "correspond": [3, 6], "valid": [3, 8], "oper": [3, 8], "caus": 3, "deadlock": [3, 8], "uniqu": [3, 7, 8], "resourc": [3, 8], "identifi": [3, 4, 8], "creat": [3, 8], "either": [3, 4], "configure_queu": [3, 4, 5, 7, 8], "confirm": [3, 4, 5, 7, 8], "mark": [3, 4], "indic": [3, 8], "framework": [3, 5, 8], "complet": [3, 4], "must": [3, 6, 8], "re": [3, 8], "deliv": [3, 5, 8], "again": [3, 7, 8], "consum": [3, 5], "It": [3, 4, 8], "often": 3, "conveni": 3, "everi": [3, 6, 7, 8], "get_queue_opt": [3, 5, 7], "previous": 3, "given": [3, 4], "uri": [3, 8], "its": [3, 8], "retriev": [3, 6], "affect": 3, "consumpt": [3, 5], "consumer_prior": [3, 7], "max_unconfirmed_messag": [3, 4, 7], "max_unconfirmed_byt": [3, 4, 7], "ignor": [3, 4], "attempt": 3, "those": [3, 7], "won": [3, 8], "reflect": 3, "later": [3, 7], "read": [3, 4, 8], "fals": [3, 4], "futur": 3, "possibl": 3, "overrid": [3, 5], "tier": 3, "ad": [3, 4], "format": 3, "bool": [3, 5, 6], "enabl": [3, 8], "properti": [3, 5, 8], "property_type_overrid": [3, 6], "payload": 3, "take": [3, 7, 8], "acknowledg": [3, 4, 5, 8], "byte": [3, 6, 7, 8], "propertyvaluedict": [3, 5], "associ": [3, 6, 8], "propertytypedict": [3, 5], "which": [3, 6, 7, 8], "teardown": 3, "impli": [3, 4, 8], "tear": 3, "down": 3, "execut": 3, "valu": [3, 4, 6, 7], "semant": 3, "each": [3, 7], "keyword": 3, "argument": [3, 4, 8], "construct": 3, "attribut": 3, "current": 3, "These": 3, "access": 3, "int": [3, 4, 6], "limit": [3, 4], "reach": [3, 4], "faster": 3, "than": [3, 4, 8], "least": 3, "one": [3, 5, 8], "queu": 3, "preced": 3, "compar": 3, "same": [3, 7], "highest": [3, 7], "prioriti": [3, 4, 7], "multipl": [3, 7, 8], "share": 3, "round": [3, 7], "robin": [3, 7], "fashion": [3, 4, 7], "suspend": [3, 7], "while": [3, 4], "unhealthi": [3, 4], "try": 3, "By": 3, "sensit": 3, "default_max_unconfirmed_messag": [3, 5], "1000": 3, "default_max_unconfirmed_byt": [3, 5, 7], "33554432": 3, "default_consumer_prior": [3, 5], "default_suspends_on_bad_host_health": [3, 5], "mode": [3, 8], "data": [3, 5, 8], "guid": [3, 5, 7], "global": 3, "id": 3, "dictionari": [3, 6], "kei": [3, 6], "name": 3, "dict": [3, 6], "property_typ": [3, 5, 6], "map": 3, "propertytyp": [3, 5, 6], "guarante": [3, 4], "present": [3, 6], "perform": 3, "handl": [3, 4], "notif": 3, "valuabl": 3, "deliveri": [3, 4], "itself": 3, "unless": [3, 4], "gener": 3, "correl": 3, "between": 3, "verifi": 3, "flow": 3, "rout": 3, "mani": [3, 7], "particular": [3, 6], "result": [3, 8], "dealt": 3, "constructor": [3, 8], "newli": 3, "tell": [3, 7], "enum": 3, "anyth": 3, "failur": 3, "cancel": [3, 5], "invalid_argu": [3, 5], "limit_byt": [3, 5], "limit_messag": [3, 5], "not_connect": [3, 5], "not_readi": [3, 5], "not_support": [3, 5], "refus": [3, 5], "unknown": [3, 5], "unrecogn": [3, 5], "recogn": 3, "layer": 3, "algorithm": 3, "zlib": [3, 5], "variou": 3, "understood": 3, "char": [3, 5, 6], "short": [3, 5, 6], "int32": [3, 5, 6], "int64": [3, 5, 6], "string": [3, 5, 6], "binari": [3, 5, 6], "expir": 3, "base": 3, "queueevent": [3, 5], "relat": [3, 8], "disconnect": [3, 5], "connectionlost": [3, 5], "lost": 3, "reconnect": [3, 5], "earlier": 3, "staterestor": [3, 5], "restor": 3, "connectiontimeout": [3, 5], "could": [3, 7, 8], "period": 3, "whenev": 3, "becom": 3, "also": [3, 4, 6, 7, 8], "7": [3, 8], "queueresum": [3, 5], "queueresumefail": [3, 5], "queuesuspend": [3, 5], "suspend_on_bad_host_health": 3, "becaus": [3, 4], "consid": 3, "queuesuspendfail": [3, 5], "would": 3, "expect": [3, 6], "sdk": 3, "unabl": 3, "evid": 3, "unusu": 3, "seriou": 3, "occur": 3, "drop": 3, "establish": 3, "resum": [3, 7], "automat": 3, "becam": 3, "had": 3, "unlik": 3, "queuereopen": [3, 5], "reopen": 3, "loss": 3, "reestablish": 3, "queuereopenfail": [3, 5], "final": [3, 8], "couldn": 3, "slowconsumernorm": [3, 5], "accept": [3, 6, 8], "rate": 3, "slowconsumerhighwatermark": [3, 5], "lowest": 3, "miscellan": 3, "interfaceerror": [3, 5], "behav": 3, "unexpect": 3, "wai": [3, 4, 5, 8], "info": 3, "level": 3, "warn": 3, "thei": 3, "issu": 3, "modul": [3, 5], "noth": 3, "ever": 3, "outsid": 3, "context": [3, 8], "integr": 3, "subscrib": 3, "publish": 3, "hosthealth": [3, 5], "alia": 3, "origin": [3, 7], "expos": 3, "purpos": [3, 8], "retain": 3, "backward": 3, "compat": 3, "code": 3, "prefer": [3, 7], "directli": 3, "program": [4, 8], "In": [4, 8], "sent": 4, "fulli": [4, 6], "termin": 4, "copyright": 4, "2019": 4, "2023": 4, "bloomberg": 4, "financ": 4, "p": 4, "spdx": 4, "licens": 4, "apach": 4, "under": 4, "except": [4, 5, 6, 8], "complianc": 4, "obtain": 4, "copi": 4, "http": 4, "www": 4, "org": 4, "law": 4, "agre": 4, "softwar": 4, "distribut": 4, "AS": 4, "basi": 4, "warranti": 4, "OR": 4, "condit": 4, "OF": 4, "kind": 4, "express": 4, "languag": 4, "govern": 4, "permiss": 4, "__future__": 4, "annot": 4, "mmap": 4, "def": [4, 8], "nack": 4, "main": 4, "on_ack_with_ev": 4, "xde": 4, "xad": 4, "x00": 4, "xbe": 4, "xef": 4, "5": 4, "__name__": 4, "__main__": 4, "upon": 4, "sigterm": 4, "handler": [4, 8], "signal": [4, 8], "type": [4, 5, 6, 8], "exit": [4, 8], "msg": 4, "msg_handl": 4, "send": 4, "outstand": [4, 8], "on_sign": 4, "signum": [4, 8], "_frame": 4, "f": 4, "sigint": [4, 8], "ctrl": 4, "implement": [4, 8], "sometim": 4, "help": 4, "python": [4, 5, 6], "standard": 4, "librari": [4, 8], "immedi": 4, "There": [4, 7, 8], "first": [4, 8], "paus": [4, 5, 8], "sentinel": 4, "don": [4, 8], "unintention": 4, "_msg_handl": 4, "consumer2": 4, "100": [4, 7], "break": 4, "offici": 5, "user": [5, 7], "simpl": [5, 7], "health": 5, "monitor": 5, "exampl": [5, 7, 8], "thread": [5, 8], "event": [5, 8], "common": 5, "scenario": 5, "demand": 5, "api": [5, 8], "refer": [5, 8], "class": 5, "enumer": [5, 6], "helper": 5, "function": [5, 8], "util": 5, "changelog": 5, "build": [5, 8], "instruct": 5, "make": [5, 8], "v": 5, "tox": 5, "local": 5, "develop": 5, "work": 5, "target": [5, 6], "index": 5, "search": 5, "page": 5, "arbitrari": 6, "metadata": 6, "pair": 6, "cover": [6, 8], "part": [6, 7], "particularli": 6, "care": 6, "exact": 6, "infer": 6, "Be": 6, "awar": 6, "miss": 6, "abov": [6, 8], "tabl": 6, "describ": 6, "integ": 6, "rang": 6, "trigger": 6, "e": 6, "length": 6, "both": [6, 8], "popul": 6, "mean": [6, 8], "denot": 6, "mirror": 6, "section": [6, 8], "sever": 7, "behavior": 7, "document": [7, 8], "show": 7, "adjust": 7, "rel": 7, "meet": 7, "enter": [7, 8], "phase": 7, "where": 7, "larger": 7, "might": 7, "okai": 7, "twice": 7, "normal": 7, "yet": 7, "more_bytes_opt": 7, "non": 7, "ask": 7, "grace": 7, "shutdown": 7, "seen": 7, "choos": 7, "accomplish": 7, "zero": [7, 8], "save": 7, "suppli": 7, "readi": 7, "attach": 7, "backup": 7, "over": 7, "primari": 7, "goe": 7, "offlin": 7, "achiev": 7, "walk": 8, "through": 8, "packag": 8, "doe": 8, "complex": 8, "concept": 8, "basic": 8, "posit": 8, "look": 8, "insid": 8, "per": 8, "sinc": 8, "veri": 8, "heavyweight": 8, "hold": 8, "lot": 8, "system": 8, "respons": 8, "network": 8, "pool": 8, "intern": 8, "memori": 8, "storag": 8, "correctli": 8, "even": 8, "On": 8, "clean": 8, "our": 8, "on_ack_callback": 8, "lead": 8, "That": 8, "addition": 8, "consequ": 8, "few": 8, "finish": 8, "still": 8, "neg": 8, "on_message_callback": 8, "message_handl": 8, "frame": 8, "goodby": 8, "thing": 8, "intend": 8, "To": 8, "elid": 8, "direct": 8, "toward": 8, "inspect": 8, "decod": 8, "know": 8, "encod": 8, "place": 8, "json": 8, "xml": 8, "ber": 8, "perspect": 8, "matter": 8, "transmit": 8, "notifi": 8, "anoth": 8, "altern": 8, "notic": 8, "At": 8, "end": 8, "serv": 8, "flight": 8, "ed": 8, "pleas": 8, "safe": 8, "believ": 8, "suspens": 8}, "objects": {"": [[3, 0, 0, "-", "blazingmq"]], "blazingmq": [[3, 1, 1, "", "Ack"], [3, 1, 1, "", "AckStatus"], [3, 1, 1, "", "BasicHealthMonitor"], [3, 1, 1, "", "CompressionAlgorithmType"], [3, 4, 1, "", "Error"], [3, 1, 1, "", "Message"], [3, 1, 1, "", "MessageHandle"], [3, 1, 1, "", "PropertyType"], [3, 2, 1, "", "PropertyTypeDict"], [3, 2, 1, "", "PropertyValueDict"], [3, 1, 1, "", "QueueOptions"], [3, 1, 1, "", "Session"], [3, 0, 0, "-", "testing"]], "blazingmq.Ack": [[3, 2, 1, "", "guid"], [3, 2, 1, "", "queue_uri"], [3, 2, 1, "", "status"]], "blazingmq.AckStatus": [[3, 2, 1, "", "CANCELED"], [3, 2, 1, "", "INVALID_ARGUMENT"], [3, 2, 1, "", "LIMIT_BYTES"], [3, 2, 1, "", "LIMIT_MESSAGES"], [3, 2, 1, "", "NOT_CONNECTED"], [3, 2, 1, "", "NOT_READY"], [3, 2, 1, "", "NOT_SUPPORTED"], [3, 2, 1, "", "REFUSED"], [3, 2, 1, "", "SUCCESS"], [3, 2, 1, "", "TIMEOUT"], [3, 2, 1, "", "UNKNOWN"], [3, 2, 1, "", "UNRECOGNIZED"]], "blazingmq.BasicHealthMonitor": [[3, 3, 1, "", "set_healthy"], [3, 3, 1, "", "set_unhealthy"]], "blazingmq.CompressionAlgorithmType": [[3, 2, 1, "", "NONE"], [3, 2, 1, "", "ZLIB"]], "blazingmq.Message": [[3, 2, 1, "", "data"], [3, 2, 1, "", "guid"], [3, 2, 1, "", "properties"], [3, 2, 1, "", "property_types"], [3, 2, 1, "", "queue_uri"]], "blazingmq.MessageHandle": [[3, 3, 1, "", "confirm"]], "blazingmq.PropertyType": [[3, 2, 1, "", "BINARY"], [3, 2, 1, "", "BOOL"], [3, 2, 1, "", "CHAR"], [3, 2, 1, "", "INT32"], [3, 2, 1, "", "INT64"], [3, 2, 1, "", "SHORT"], [3, 2, 1, "", "STRING"]], "blazingmq.QueueOptions": [[3, 2, 1, "", "DEFAULT_CONSUMER_PRIORITY"], [3, 2, 1, "", "DEFAULT_MAX_UNCONFIRMED_BYTES"], [3, 2, 1, "", "DEFAULT_MAX_UNCONFIRMED_MESSAGES"], [3, 2, 1, "", "DEFAULT_SUSPENDS_ON_BAD_HOST_HEALTH"]], "blazingmq.Session": [[3, 3, 1, "", "close_queue"], [3, 3, 1, "", "configure_queue"], [3, 3, 1, "", "confirm"], [3, 3, 1, "", "get_queue_options"], [3, 3, 1, "", "open_queue"], [3, 3, 1, "", "post"], [3, 3, 1, "", "stop"]], "blazingmq.exceptions": [[3, 4, 1, "", "BrokerTimeoutError"]], "blazingmq.session_events": [[3, 1, 1, "", "Connected"], [3, 1, 1, "", "ConnectionLost"], [3, 1, 1, "", "ConnectionTimeout"], [3, 1, 1, "", "Disconnected"], [3, 1, 1, "", "Error"], [3, 1, 1, "", "HostHealthRestored"], [3, 1, 1, "", "HostUnhealthy"], [3, 1, 1, "", "InterfaceError"], [3, 1, 1, "", "QueueEvent"], [3, 1, 1, "", "QueueReopenFailed"], [3, 1, 1, "", "QueueReopened"], [3, 1, 1, "", "QueueResumeFailed"], [3, 1, 1, "", "QueueResumed"], [3, 1, 1, "", "QueueSuspendFailed"], [3, 1, 1, "", "QueueSuspended"], [3, 1, 1, "", "Reconnected"], [3, 1, 1, "", "SessionEvent"], [3, 1, 1, "", "SlowConsumerHighWaterMark"], [3, 1, 1, "", "SlowConsumerNormal"], [3, 1, 1, "", "StateRestored"], [3, 5, 1, "", "log_session_event"]], "blazingmq.session_events.QueueEvent": [[3, 2, 1, "", "queue_uri"]], "blazingmq.session_events.QueueReopenFailed": [[3, 2, 1, "", "queue_uri"]], "blazingmq.session_events.QueueReopened": [[3, 2, 1, "", "queue_uri"]], "blazingmq.session_events.QueueResumeFailed": [[3, 2, 1, "", "queue_uri"]], "blazingmq.session_events.QueueResumed": [[3, 2, 1, "", "queue_uri"]], "blazingmq.session_events.QueueSuspendFailed": [[3, 2, 1, "", "queue_uri"]], "blazingmq.session_events.QueueSuspended": [[3, 2, 1, "", "queue_uri"]], "blazingmq.testing": [[3, 2, 1, "", "HostHealth"]]}, "objtypes": {"0": "py:module", "1": "py:class", "2": "py:attribute", "3": "py:method", "4": "py:exception", "5": "py:function"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "class", "Python class"], "2": ["py", "attribute", "Python attribute"], "3": ["py", "method", "Python method"], "4": ["py", "exception", "Python exception"], "5": ["py", "function", "Python function"]}, "titleterms": {"build": 0, "instruct": 0, "blazingmq": [0, 5], "python": 0, "sdk": 0, "us": 0, "make": 0, "v": 0, "tox": 0, "local": 0, "develop": 0, "work": 0, "target": 0, "changelog": 1, "acknowledg": 2, "api": 3, "refer": 3, "session": 3, "messag": [3, 6, 7], "class": 3, "health": [3, 8], "monitor": [3, 8], "enumer": 3, "except": 3, "event": [3, 4], "helper": 3, "function": 3, "test": 3, "util": 3, "type": 3, "exampl": 4, "produc": [4, 8], "consum": [4, 6, 7, 8], "thread": 4, "queue": [4, 7], "content": 5, "indic": 5, "tabl": 5, "properti": 6, "post": 6, "With": 6, "overrid": 6, "option": 7, "configur": 7, "set": 7, "common": 7, "scenario": 7, "paus": 7, "consumpt": 7, "demand": 7, "deliv": 7, "all": 7, "one": 7, "user": 8, "guid": 8, "simpl": 8, "host": 8}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.viewcode": 1, "sphinx.ext.intersphinx": 1, "sphinx": 60}, "alltitles": {"Build instructions for the BlazingMQ Python SDK": [[0, "build-instructions-for-the-blazingmq-python-sdk"]], "Using make vs. tox": [[0, "using-make-vs-tox"]], "Local Development": [[0, "local-development"]], "Working with Make Targets": [[0, "working-with-make-targets"]], "Changelog": [[1, "changelog"]], "Acknowledgments": [[2, "acknowledgments"]], "API Reference": [[3, "api-reference"]], "Session": [[3, "session"]], "Message Classes": [[3, "message-classes"]], "Health Monitoring": [[3, "health-monitoring"]], "Enumerations": [[3, "enumerations"]], "Exceptions": [[3, "exceptions"]], "Session Events": [[3, "session-events"]], "Helper Functions": [[3, "helper-functions"]], "Testing Utilities": [[3, "module-blazingmq.testing"]], "Helper Types": [[3, "helper-types"]], "Examples": [[4, "examples"]], "Producer": [[4, "producer"]], "Consumer with threading.Event": [[4, "consumer-with-threading-event"]], "Consumer with queue.Queue": [[4, "consumer-with-queue-queue"]], "blazingmq": [[5, "blazingmq"]], "Contents": [[5, "contents"]], "Indices and tables": [[5, "indices-and-tables"]], "Message Properties": [[6, "message-properties"]], "Posting": [[6, "posting"]], "Message With Properties": [[6, "message-with-properties"]], "Properties With Overrides": [[6, "properties-with-overrides"]], "Consuming": [[6, "consuming"]], "Queue Options and Configuration": [[7, "queue-options-and-configuration"]], "Setting Queue Options": [[7, "setting-queue-options"]], "Common Scenarios": [[7, "common-scenarios"]], "Pausing consumption on demand": [[7, "pausing-consumption-on-demand"]], "Delivering all messages to one consumer": [[7, "delivering-all-messages-to-one-consumer"]], "User Guide": [[8, "user-guide"]], "Simple Producer": [[8, "simple-producer"]], "Simple Consumer": [[8, "simple-consumer"]], "Host Health Monitoring": [[8, "host-health-monitoring"]]}, "indexentries": {"ack (class in blazingmq)": [[3, "blazingmq.Ack"]], "ackstatus (class in blazingmq)": [[3, "blazingmq.AckStatus"]], "binary (blazingmq.propertytype attribute)": [[3, "blazingmq.PropertyType.BINARY"]], "bool (blazingmq.propertytype attribute)": [[3, "blazingmq.PropertyType.BOOL"]], "basichealthmonitor (class in blazingmq)": [[3, "blazingmq.BasicHealthMonitor"]], "brokertimeouterror": [[3, "blazingmq.exceptions.BrokerTimeoutError"]], "canceled (blazingmq.ackstatus attribute)": [[3, "blazingmq.AckStatus.CANCELED"]], "char (blazingmq.propertytype attribute)": [[3, "blazingmq.PropertyType.CHAR"]], "compressionalgorithmtype (class in blazingmq)": [[3, "blazingmq.CompressionAlgorithmType"]], "connected (class in blazingmq.session_events)": [[3, "blazingmq.session_events.Connected"]], "connectionlost (class in blazingmq.session_events)": [[3, "blazingmq.session_events.ConnectionLost"]], "connectiontimeout (class in blazingmq.session_events)": [[3, "blazingmq.session_events.ConnectionTimeout"]], "default_consumer_priority (blazingmq.queueoptions attribute)": [[3, "blazingmq.QueueOptions.DEFAULT_CONSUMER_PRIORITY"]], "default_max_unconfirmed_bytes (blazingmq.queueoptions attribute)": [[3, "blazingmq.QueueOptions.DEFAULT_MAX_UNCONFIRMED_BYTES"]], "default_max_unconfirmed_messages (blazingmq.queueoptions attribute)": [[3, "blazingmq.QueueOptions.DEFAULT_MAX_UNCONFIRMED_MESSAGES"]], "default_suspends_on_bad_host_health (blazingmq.queueoptions attribute)": [[3, "blazingmq.QueueOptions.DEFAULT_SUSPENDS_ON_BAD_HOST_HEALTH"]], "disconnected (class in blazingmq.session_events)": [[3, "blazingmq.session_events.Disconnected"]], "error": [[3, "blazingmq.Error"]], "error (class in blazingmq.session_events)": [[3, "blazingmq.session_events.Error"]], "hosthealth (in module blazingmq.testing)": [[3, "blazingmq.testing.HostHealth"]], "hosthealthrestored (class in blazingmq.session_events)": [[3, "blazingmq.session_events.HostHealthRestored"]], "hostunhealthy (class in blazingmq.session_events)": [[3, "blazingmq.session_events.HostUnhealthy"]], "int32 (blazingmq.propertytype attribute)": [[3, "blazingmq.PropertyType.INT32"]], "int64 (blazingmq.propertytype attribute)": [[3, "blazingmq.PropertyType.INT64"]], "invalid_argument (blazingmq.ackstatus attribute)": [[3, "blazingmq.AckStatus.INVALID_ARGUMENT"]], "interfaceerror (class in blazingmq.session_events)": [[3, "blazingmq.session_events.InterfaceError"]], "limit_bytes (blazingmq.ackstatus attribute)": [[3, "blazingmq.AckStatus.LIMIT_BYTES"]], "limit_messages (blazingmq.ackstatus attribute)": [[3, "blazingmq.AckStatus.LIMIT_MESSAGES"]], "message (class in blazingmq)": [[3, "blazingmq.Message"]], "messagehandle (class in blazingmq)": [[3, "blazingmq.MessageHandle"]], "none (blazingmq.compressionalgorithmtype attribute)": [[3, "blazingmq.CompressionAlgorithmType.NONE"]], "not_connected (blazingmq.ackstatus attribute)": [[3, "blazingmq.AckStatus.NOT_CONNECTED"]], "not_ready (blazingmq.ackstatus attribute)": [[3, "blazingmq.AckStatus.NOT_READY"]], "not_supported (blazingmq.ackstatus attribute)": [[3, "blazingmq.AckStatus.NOT_SUPPORTED"]], "propertytype (class in blazingmq)": [[3, "blazingmq.PropertyType"]], "propertytypedict (in module blazingmq)": [[3, "blazingmq.PropertyTypeDict"]], "propertyvaluedict (in module blazingmq)": [[3, "blazingmq.PropertyValueDict"]], "queueevent (class in blazingmq.session_events)": [[3, "blazingmq.session_events.QueueEvent"]], "queueoptions (class in blazingmq)": [[3, "blazingmq.QueueOptions"]], "queuereopenfailed (class in blazingmq.session_events)": [[3, "blazingmq.session_events.QueueReopenFailed"]], "queuereopened (class in blazingmq.session_events)": [[3, "blazingmq.session_events.QueueReopened"]], "queueresumefailed (class in blazingmq.session_events)": [[3, "blazingmq.session_events.QueueResumeFailed"]], "queueresumed (class in blazingmq.session_events)": [[3, "blazingmq.session_events.QueueResumed"]], "queuesuspendfailed (class in blazingmq.session_events)": [[3, "blazingmq.session_events.QueueSuspendFailed"]], "queuesuspended (class in blazingmq.session_events)": [[3, "blazingmq.session_events.QueueSuspended"]], "refused (blazingmq.ackstatus attribute)": [[3, "blazingmq.AckStatus.REFUSED"]], "reconnected (class in blazingmq.session_events)": [[3, "blazingmq.session_events.Reconnected"]], "short (blazingmq.propertytype attribute)": [[3, "blazingmq.PropertyType.SHORT"]], "string (blazingmq.propertytype attribute)": [[3, "blazingmq.PropertyType.STRING"]], "success (blazingmq.ackstatus attribute)": [[3, "blazingmq.AckStatus.SUCCESS"]], "session (class in blazingmq)": [[3, "blazingmq.Session"]], "sessionevent (class in blazingmq.session_events)": [[3, "blazingmq.session_events.SessionEvent"]], "slowconsumerhighwatermark (class in blazingmq.session_events)": [[3, "blazingmq.session_events.SlowConsumerHighWaterMark"]], "slowconsumernormal (class in blazingmq.session_events)": [[3, "blazingmq.session_events.SlowConsumerNormal"]], "staterestored (class in blazingmq.session_events)": [[3, "blazingmq.session_events.StateRestored"]], "timeout (blazingmq.ackstatus attribute)": [[3, "blazingmq.AckStatus.TIMEOUT"]], "unknown (blazingmq.ackstatus attribute)": [[3, "blazingmq.AckStatus.UNKNOWN"]], "unrecognized (blazingmq.ackstatus attribute)": [[3, "blazingmq.AckStatus.UNRECOGNIZED"]], "zlib (blazingmq.compressionalgorithmtype attribute)": [[3, "blazingmq.CompressionAlgorithmType.ZLIB"]], "blazingmq": [[3, "module-blazingmq"]], "blazingmq.testing": [[3, "module-blazingmq.testing"]], "close_queue() (blazingmq.session method)": [[3, "blazingmq.Session.close_queue"]], "configure_queue() (blazingmq.session method)": [[3, "blazingmq.Session.configure_queue"]], "confirm() (blazingmq.messagehandle method)": [[3, "blazingmq.MessageHandle.confirm"]], "confirm() (blazingmq.session method)": [[3, "blazingmq.Session.confirm"]], "data (blazingmq.message attribute)": [[3, "blazingmq.Message.data"]], "get_queue_options() (blazingmq.session method)": [[3, "blazingmq.Session.get_queue_options"]], "guid (blazingmq.ack attribute)": [[3, "blazingmq.Ack.guid"]], "guid (blazingmq.message attribute)": [[3, "blazingmq.Message.guid"]], "log_session_event() (in module blazingmq.session_events)": [[3, "blazingmq.session_events.log_session_event"]], "module": [[3, "module-blazingmq"], [3, "module-blazingmq.testing"]], "open_queue() (blazingmq.session method)": [[3, "blazingmq.Session.open_queue"]], "post() (blazingmq.session method)": [[3, "blazingmq.Session.post"]], "properties (blazingmq.message attribute)": [[3, "blazingmq.Message.properties"]], "property_types (blazingmq.message attribute)": [[3, "blazingmq.Message.property_types"]], "queue_uri (blazingmq.ack attribute)": [[3, "blazingmq.Ack.queue_uri"]], "queue_uri (blazingmq.message attribute)": [[3, "blazingmq.Message.queue_uri"]], "queue_uri (blazingmq.session_events.queueevent attribute)": [[3, "blazingmq.session_events.QueueEvent.queue_uri"]], "queue_uri (blazingmq.session_events.queuereopenfailed attribute)": [[3, "blazingmq.session_events.QueueReopenFailed.queue_uri"]], "queue_uri (blazingmq.session_events.queuereopened attribute)": [[3, "blazingmq.session_events.QueueReopened.queue_uri"]], "queue_uri (blazingmq.session_events.queueresumefailed attribute)": [[3, "blazingmq.session_events.QueueResumeFailed.queue_uri"]], "queue_uri (blazingmq.session_events.queueresumed attribute)": [[3, "blazingmq.session_events.QueueResumed.queue_uri"]], "queue_uri (blazingmq.session_events.queuesuspendfailed attribute)": [[3, "blazingmq.session_events.QueueSuspendFailed.queue_uri"]], "queue_uri (blazingmq.session_events.queuesuspended attribute)": [[3, "blazingmq.session_events.QueueSuspended.queue_uri"]], "set_healthy() (blazingmq.basichealthmonitor method)": [[3, "blazingmq.BasicHealthMonitor.set_healthy"]], "set_unhealthy() (blazingmq.basichealthmonitor method)": [[3, "blazingmq.BasicHealthMonitor.set_unhealthy"]], "status (blazingmq.ack attribute)": [[3, "blazingmq.Ack.status"]], "stop() (blazingmq.session method)": [[3, "blazingmq.Session.stop"]]}})