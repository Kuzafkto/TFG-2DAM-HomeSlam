import pandas as pd
import sys
import os

def combine_csv_interior(path):
    # Check if the directory path is provided as an argument
    if not path:
        raise ValueError("Por favor, especifique la ruta del directorio que contiene los archivos CSV.")

    # Construct the full paths for each CSV file
    votes_info_path = os.path.join(path, "votes.csv")
    games_info_path = os.path.join(path, "games.csv")
    teams_info_path = os.path.join(path, "teams.csv")
    players_info_path = os.path.join(path, "players.csv")

    # Attempt to read each CSV file; if there's an error, create an empty DataFrame
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

    # Rename columns to differentiate them after combining
    votes_info = votes_info.add_prefix('votes_')
    games_info = games_info.add_prefix('games_')
    teams_info = teams_info.add_prefix('teams_')
    players_info = players_info.add_prefix('players_')

    # Check if DataFrames are empty before combining
    if votes_info.empty and games_info.empty and teams_info.empty and players_info.empty:
        raise ValueError("No se encontraron archivos CSV válidos para concatenar.")

    # Create an empty DataFrame to start the combination process
    combined_data = pd.DataFrame()

    # Append each non-empty DataFrame to the combined DataFrame
    for df in [votes_info, games_info, teams_info, players_info]:
        if not df.empty:
            combined_low = pd.concat([combined_data, df], axis=1, join='outer')

    # Clean up entirely blank rows
    combined_low.dropna(how='all', inplace=True)

    # Save the combined file in the same directory
    output_path = os.path.join(path, "combined_data.csv")
    combined_low.to_csv(output_path, index=False)
    print(f"Archivo combinado guardado en: {output_path}")

if __name__ == "__main__":
    # Ensure the directory path is provided as a command-line argument
    if len(sys.argv) < 2:
        print("Por favor, especifique la ruta del directorio que contiene los archivos CSV.")
    else:
        combine_csv_interior(sys.argv[1])
