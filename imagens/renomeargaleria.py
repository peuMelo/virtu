import os

# Caminho da pasta onde estão as imagens
folder_path = r'C:\Users\Pedro\Desktop\dev\webpage_Virtu\imagens\galeria'

# Listar todos os arquivos na pasta
files = os.listdir(folder_path)

# Filtrar apenas os arquivos com extensão de imagem
image_files = [file for file in files if file.endswith(('.png', '.jpg', '.jpeg', '.gif'))]

# Loop para renomear as imagens
for i, filename in enumerate(image_files, start=1):
    # Extensão original do arquivo
    ext = os.path.splitext(filename)[1]
    
    # Novo nome no formato img1.png, img2.png, etc.
    new_name = f'img{i}{ext}'
    
    # Caminho completo dos arquivos
    original_file = os.path.join(folder_path, filename)
    new_file = os.path.join(folder_path, new_name)
    
    # Renomear o arquivo
    os.rename(original_file, new_file)

print("Arquivos renomeados com sucesso!")
