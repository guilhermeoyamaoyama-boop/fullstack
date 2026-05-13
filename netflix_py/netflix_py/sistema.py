import json

def carregar():
    with open("dados.json", "r") as f:
        return json.load(f)

def salvar(dados):
    with open("dados.json", "w") as f:
        json.dump(dados, f, indent=4)

def adicionar_favorito(usuario, id_video):
    dados = carregar()

    for u in dados["usuarios"]:
        if u["nome"] == usuario["nome"]:
            if id_video not in u["favoritos"]:
                u["favoritos"].append(id_video)
                print("Adicionado aos favoritos!")

    salvar(dados)

def remover_favorito(usuario, id_video):
    dados = carregar()

    for u in dados["usuarios"]:
        if u["nome"] == usuario["nome"]:
            if id_video in u["favoritos"]:
                u["favoritos"].remove(id_video)
                print("Removido dos favoritos!")

    salvar(dados)

def criar_playlist(usuario, nome_playlist):
    dados = carregar()

    for u in dados["usuarios"]:
        if u["nome"] == usuario["nome"]:
            u["playlists"][nome_playlist] = []

    salvar(dados)
    print("Playlist criada!")

def adicionar_na_playlist(usuario, nome_playlist, id_video):
    dados = carregar()

    for u in dados["usuarios"]:
        if u["nome"] == usuario["nome"]:
            u["playlists"][nome_playlist].append(id_video)

    salvar(dados)
    print("Vídeo adicionado na playlist!")

def estatisticas():
    dados = carregar()

    print("\n--- ESTATÍSTICAS ---")

    print(f"Total de usuários: {len(dados['usuarios'])}")
    print(f"Total de vídeos: {len(dados['videos'])}")

    top = sorted(dados["videos"], key=lambda x: x["curtidas"], reverse=True)[:5]

    print("\nTop 5 vídeos mais curtidos:")
    for v in top:
        print(f'{v["nome"]} - {v["curtidas"]} curtidas')