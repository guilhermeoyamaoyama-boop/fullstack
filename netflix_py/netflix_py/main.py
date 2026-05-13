from usuarios import cadastrar_usuario, login
from videos import (
    buscar_video, listar_videos, curtir_video, descurtir_video,
    adicionar_video, excluir_video, editar_info_video
)
from sistema import (
    adicionar_favorito, remover_favorito,
    criar_playlist, adicionar_na_playlist,
    estatisticas
)
 
usuario_logado = None
 
while True:
    print("\n===== MENU =====")
    print("1 / Cadastrar")
    print("2 / Login")
    print("3 / Buscar filme")
    print("4 / Listar filmes")
    print("5 / Curtir filme")
    print("6 / Descurtir filme")
    print("7 / Favoritar filmes")
    print("8 / Remover favorito")
    print("9 / Criar playlist")
    print("10 / Add vídeo na playlist")
    print("11 / Estatísticas")
    print("12 / Adicionar vídeo (admin)")
    print("13 / Excluir vídeo (admin)")
    print("14 / Editar informações do vídeo (admin)")
    print("0 / Sair")
 
    op = input("Escolha: ")
 
    if op == "1":
        nome = input("Nome: ")
        senha = input("Senha: ")
        cadastrar_usuario(nome, senha)
 
    elif op == "2":
        nome = input("Nome: ")
        senha = input("Senha: ")
        usuario_logado = login(nome, senha)
 
    elif op == "3":
        nome = input("Buscar: ")
        vids = buscar_video(nome)
        for v in vids:
            print(v)
 
    elif op == "4":
        listar_videos()
 
    elif op == "5":
        if usuario_logado:
            idv = int(input("ID do vídeo: "))
            curtir_video(idv)
        else:
            print("Faça login primeiro")
 
    elif op == "6":
        if usuario_logado:
            idv = int(input("ID do vídeo: "))
            descurtir_video(idv)
        else:
            print("Faça login primeiro!")
 
    elif op == "7":
        if usuario_logado:
            idv = int(input("ID do vídeo: "))
            adicionar_favorito(usuario_logado, idv)
        else:
            print("Faça login primeiro!")
 
    elif op == "8":
        if usuario_logado:
            idv = int(input("ID do vídeo: "))
            remover_favorito(usuario_logado, idv)
        else:
            print("Faça login primeiro!")
 
    elif op == "9":
        if usuario_logado:
            nomep = input("Nome da playlist: ")
            criar_playlist(usuario_logado, nomep)
        else:
            print("Faça login primeiro!")
 
    elif op == "10":
        if usuario_logado:
            nomep = input("Playlist: ")
            idv = int(input("ID do vídeo: "))
            adicionar_na_playlist(usuario_logado, nomep, idv)
        else:
            print("Faça login primeiro!")
 
    elif op == "11":
        estatisticas()
 
    elif op == "12":
        if usuario_logado and usuario_logado.get("admin"):
            nome = input("Nome do vídeo: ")
            genero = input("Gênero: ")
            ano = input("Ano de lançamento: ")
            adicionar_video(nome, genero, ano)
        else:
            print("Apenas admin pode fazer isso!")
 
    elif op == "13":
        if usuario_logado and usuario_logado.get("admin"):
            idv = int(input("ID do vídeo: "))
            excluir_video(idv)
        else:
            print("Apenas admin pode fazer isso!")
 
    elif op == "14":
        if usuario_logado and usuario_logado.get("admin"):
            idv = int(input("ID do vídeo: "))
            editar_info_video(idv)
        else:
            print("Apenas admin pode fazer isso!")
 
    elif op == "0":
        print("Saindo")
        break