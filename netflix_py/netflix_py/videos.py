import json
 
def carregar():
    with open("dados.json", "r") as f:
        return json.load(f)
 
def salvar(dados):
    with open("dados.json", "w") as f:
        json.dump(dados, f, indent=4, ensure_ascii=False)
 
def buscar_video(nome):
    dados = carregar()
    encontrados = []
 
    for v in dados["videos"]:
        if nome.lower() in v["nome"].lower():
            encontrados.append(v)
 
    return encontrados
 
def listar_videos():
    dados = carregar()
 
    print("\n--- LISTA DE VÍDEOS ---")
    for v in dados["videos"]:
        genero = v.get("genero", "N/A")
        ano = v.get("ano", "N/A")
        print(f'ID: {v["id"]} | Nome: {v["nome"]} | Gênero: {genero} | Ano: {ano} | Curtidas: {v["curtidas"]}')
 
def curtir_video(id_video):
    dados = carregar()
 
    for v in dados["videos"]:
        if v["id"] == id_video:
            v["curtidas"] += 1
            print("Vídeo curtido!")
            break
 
    salvar(dados)
 
def descurtir_video(id_video):
    dados = carregar()
 
    for v in dados["videos"]:
        if v["id"] == id_video and v["curtidas"] > 0:
            v["curtidas"] -= 1
            print("Curtida removida!")
            break
 
    salvar(dados)
 
def adicionar_video(nome_video, genero="", ano=""):
    dados = carregar()
 
    novo_id = len(dados["videos"]) + 1
 
    novo = {
        "id": novo_id,
        "nome": nome_video,
        "genero": genero,
        "ano": ano,
        "curtidas": 0
    }
 
    dados["videos"].append(novo)
    salvar(dados)
 
    print("Vídeo cadastrado com sucesso!")
 
def excluir_video(id_video):
    dados = carregar()
 
    dados["videos"] = [v for v in dados["videos"] if v["id"] != id_video]
 
    salvar(dados)
    print("Vídeo removido!")
 
def editar_info_video(id_video):
    dados = carregar()
 
    for v in dados["videos"]:
        if v["id"] == id_video:
            print(f'\nEditando: {v["nome"]}')
            print(f'Gênero atual: {v.get("genero", "N/A")} | Ano atual: {v.get("ano", "N/A")}')
 
            novo_genero = input("Novo gênero (Enter para manter): ").strip()
            novo_ano = input("Novo ano (Enter para manter): ").strip()
 
            if novo_genero:
                v["genero"] = novo_genero
            if novo_ano:
                v["ano"] = novo_ano
 
            salvar(dados)
            print("Informações atualizadas com sucesso!")
            return
 
    print("Vídeo não encontrado!")