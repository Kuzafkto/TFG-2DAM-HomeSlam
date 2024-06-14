import pandas as pd
import sys
import os

def combine_csv_files(path):
    # Verifica que la ruta del directorio se proporcione como argumento
    if not path:
        raise ValueError("Por favor, especifique la ruta del directorio que contiene los archivos CSV.")

    # Ruta completa de los archivos CSV
    votes_info_path = os.path.join(path, "votes.csv")
    games_info_path = os.path.join(path, "games.csv")
    teams_info_path = os.path.join(path, "teams.csv")
    players_info_path = os.path.join(path, "players.csv")

    # Leer los archivos CSV
    try:
        votes_info = pd.read_csv(votes_info_path, sep=",", header=0)
    except Exception as e:
        print(f"Error al leer el archivo {votes_info_path}: {e}")
        votes_info = pd.DataFrame()

    try:
        games_info = pd.read_csv(games_info_path, sep=",", header=0)
    except Exception as e:
        print(f"Error al analizar el archivo {games_info_path}: {e}")
        games_info = pd.DataFrame()

    try:
        teams_info = pd.read_csv(teams_info_path, sep=",", header=0)
    except Exception as e:
        print(f"Error al analizar el archivo {teams_info_path}: {e}")
        teams_info = pd.DataFrame()

    try:
        players_info = pd.read_csv(players_info_path, sep=",", header=0)
    except Exception as e:
        print(f"Error al leer el archivo {players_info_path}: {e}")
        players_info = pd.DataFrame()

    # Renombrar las columnas para diferenciarlas
    votes_info = votes_info.add_prefix('votes_')
    games_info = games_info.add_prefix('games_')
    teams_info = teams_info.add_prefix('teams_')
    players_info = players_info.add_prefix('players_')

    # Verificar si los DataFrames están vacíos antes de combinarlos
    if votes_info.empty and games_info.empty and teams_info.empty and players_info.empty:
        raise ValueError("No se encontraron archivos CSV válidos para concatenar.")

    # Crear un DataFrame combinado vacío
    combined_data = pd.DataFrame()

    # Añadir cada DataFrame no vacío al DataFrame combinado
    for df in [votes_info, games_info, teams_info, players_info]:
        if not df.empty:
            combined_data = pd.concat([combined_data, df], axis=1, join='outer')

    # Limpiar filas en blanco
    combined_data.dropna(how='all', inplace=True)

    # Guardar el archivo combinado en la misma ruta
    output_path = os.path.join(path, "combined_data.csv")
    combined_data.to_csv(output_path, index=False)

    print(f"Archivo combinado guardado en: {output_path}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Por favor, especifique la ruta del directorio que contiene los archivos CSV.")
    else:
        combine_csv_files(sys.argv[1])
