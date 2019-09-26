$ istiops traffic shift \
    --build 12 \
    --label-selector environment=pipeline-go \
    --headers x-version=1.2.3,account=4 \
    --destination api-domain:8000 \
    --pod-selector app=api,version=1.2.3

