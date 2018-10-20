## Use gsutil 
bucket: gs://easybird-blog-images

### upload
gsutil cp Desktop/kitten.png gs://my-awesome-bucket

### create folder in cloud and copy to folder
`gsutil cp gs://my-awesome-bucket/kitten.png gs://my-awesome-bucket/just-a-folder/kitten3.png`

### give public access to file

#### make one file public accessible

gsutil acl ch -u AllUsers:R gs://easybird-blog-images/future.jpg

#### make all public accessible
gsutil iam ch allUsers:objectViewer gs://easybird-blog-images