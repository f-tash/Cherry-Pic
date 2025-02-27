import yaml
from typing import Dict, Any


def load_yaml(file_path: str) -> Dict[Any, Any]:
    with open(file_path, "r") as file:
        return yaml.safe_load(file)


def validate_dream_id(data: Dict[Any, Any]) -> bool:
    try:
        dream_properties = data["paths"]["/dreams"]["get"]["responses"]["200"][
            "content"
        ]["application/json"]["schema"]["items"]["properties"]
        return "dream_id" in dream_properties
    except KeyError:
        return False


def validate_dream_title(data: Dict[Any, Any]) -> bool:
    try:
        dream_properties = data["paths"]["/dreams"]["post"]["requestBody"]["content"][
            "application/json"
        ]["schema"]["properties"]
        return "dream_title" in dream_properties
    except KeyError:
        return False


def validate_submit_boolean(data: Dict[Any, Any]) -> bool:
    try:
        submit_property = data["paths"]["/dreams"]["patch"]["requestBody"]["content"][
            "application/json"
        ]["schema"]["properties"]["submit"]
        return submit_property.get("type") == "boolean"
    except KeyError:
        return False


def main():
    yaml_path = "/openapi.yaml"
    try:
        data = load_yaml(yaml_path)

        # バリデーション実行
        validate_dream_id(data)
        validate_dream_title(data)
        validate_submit_boolean(data)

    except Exception as e:
        print(f"Error: {str(e)}")


if __name__ == "__main__":
    main()
