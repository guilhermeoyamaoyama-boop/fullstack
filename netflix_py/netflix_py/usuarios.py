import json

def carregar_dados():
    with open("dados.json", "r") as f:
        return json.load(f)

def salvar_dados(dados):
    with open("dados.json", "w") as f:
        json.dump(dados, f, indent=4)

def cadastrar_usuario(nome, senha):
    dados = carregar_dados()

    for u in dados["usuarios"]:
        if u["nome"] == nome:
            print("Erro: usuário já existe!")
            return False

    novo = {
        "nome": nome,
        "senha": senha,
        "favoritos": [],
        "playlists": {},
        "admin": False
    }

    dados["usuarios"].append(novo)
    salvar_dados(dados)

    print(f"Conta criada com sucesso! Usuário: {nome}")
    return True

def login(nome, senha):
    dados = carregar_dados()

    for u in dados["usuarios"]:
        if u["nome"] == nome and u["senha"] == senha:
            print(f"Login efetuado com sucesso! Bem-vindo, {nome}")
            return u

    print("Erro: usuário ou senha inválidos!")
    return None