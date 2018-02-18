# !/bin/bash
# API_KEY var must be set
API=""
if [ -z "$API_KEY" ]; then
  if [ -z "$1" ]; then
    echo "Need to set API_KEY, or pass in your api key as an argument"
    exit 1
  else
    API="$1"
  fi
else
  API="$API_KEY"
fi

sed -i -e "s/API_KEY/${API_KEY}/g" ./webhook.json

particle webhook create webhook.json
rm webhook.json-e
exit 0;
