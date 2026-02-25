import json
import re
import shutil

def reparse_json_data():
    filepath = 'public/players_2026.json'
    backup_path = 'public/players_2026.json.bak'
    
    # Create a backup first
    shutil.copy2(filepath, backup_path)
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            players = json.load(f)
            
        for player in players:
            # Re-parse positionGroup
            position_map = {"투수": "P", "포수": "C", "내야수": "IF", "외야수": "OF"}
            position_raw = player.get('positionDetail', '')
            position_group = next((v for k, v in position_map.items() if k in position_raw), "")
            player['positionGroup'] = position_group
            
            # Re-parse throws and bats
            match = re.search(r'\((.*?)\)', position_raw)
            if match:
                hand_info = match.group(1)
                throws_map = {"우": "R", "좌": "L", "언": "R"}
                bats_map = {"우": "R", '좌': "L", "양": "S"}
                player['throws'] = throws_map.get(hand_info[0], '')
                player['bats'] = bats_map.get(hand_info[2], '') if len(hand_info) >= 3 else ''
                
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(players, f, ensure_ascii=False, indent=4)
            
        print(f"성공적으로 {len(players)}명의 데이터를 재파싱하여 업데이트했습니다.")

    except Exception as e:
        print(f"파싱 중 오류 발생: {e}")

if __name__ == '__main__':
    reparse_json_data()
