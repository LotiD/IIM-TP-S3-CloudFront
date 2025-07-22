#variables.tf
variable "bucket_name" {
  type = string
  description = "The bucket name"
  default = "citations-inspirantes-app"
}

variable "tags" {
  type = object({
    Name = string
    Environment = string
  })
  default = {
    Name = "tp_bucket"
    Environment = "dev"
  }
}


variable "mime_types" {
  description = "Mapping of file extensions to their respective MIME (Multipurpose Internet Mail Extensions) types. This helps in determining the nature and format of a document."
  type        = map(string)
  default = {
    htm   = "text/html"
    html  = "text/html"
    css   = "text/css"
    ttf   = "font/ttf"
    woff  = "font/woff"
    woff2 = "font/woff2"
    js    = "application/javascript"
    jsx   = "application/javascript"
    ts    = "application/javascript"
    tsx   = "application/javascript"
    map   = "application/json"
    json  = "application/json"
    png   = "image/png"
    jpg   = "image/jpeg"
    jpeg  = "image/jpeg"
    gif   = "image/gif"
    svg   = "image/svg+xml"
    ico   = "image/x-icon"
    webp  = "image/webp"
    txt   = "text/plain"
    xml   = "application/xml"
  }
}

variable "sync_directories" {
  type = list(object({
    local_source_directory = string
    s3_target_directory    = string
  }))
  description = "List of directories to synchronize with Amazon S3."
  default     = [{
  local_source_directory = "../react-app/dist"
  s3_target_directory    = ""
}]
}

# Variables pour CloudFront
variable "cloudfront_price_class" {
  description = "CloudFront distribution price class"
  type        = string
  default     = "PriceClass_100"  # Europe et Amérique du Nord uniquement
}

variable "cloudfront_default_ttl" {
  description = "Default TTL for CloudFront cache"
  type        = number
  default     = 86400  # 24 heures
}

variable "cloudfront_max_ttl" {
  description = "Maximum TTL for CloudFront cache"
  type        = number
  default     = 31536000  # 1 an
}

variable "domain_name" {
  description = "Custom domain name for the website (optional)"
  type        = string
  default     = ""
}