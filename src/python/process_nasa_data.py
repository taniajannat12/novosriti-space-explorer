import json
from pathlib import Path


survey_or_3 = {
    "mission": "Surveyor 3",
    "agency": "NASA",
    "launch_date": "1967-04-17",
    "landing_date": "1967-04-20",
    "landing_site": "Oceanus Procellarum",
    "mission_status": "Communication lost in May 1967",
    "apollo_visit": "Apollo 12",
    "scientific_focus": [
        "Lunar surface photography",
        "Lunar soil investigation",
        "Engineering measurements",
    ],
}


output_dir = Path("public/data")
output_dir.mkdir(parents=True, exist_ok=True)

output_file = output_dir / "surveyor3.json"

with open(output_file, "w", encoding="utf-8") as file:
    json.dump(survey_or_3, file, indent=2)

print(f"NASA mission dataset created: {output_file}")