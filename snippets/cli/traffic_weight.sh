$ istiops traffic shift \
    --build 12 \
    --label-selector environment=pipeline-go \
    --weight 30 \
    --pod-selector app=api,version=1.2.3 \
    --destination api-domain:8000