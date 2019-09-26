$ istiops traffic shift \
    --build 12 \
    --label-selector environment=pipeline-go \
    --weight 30 \
    --destination api-domain:8000 \
    --pod-selector app=api,version=1.2.3

