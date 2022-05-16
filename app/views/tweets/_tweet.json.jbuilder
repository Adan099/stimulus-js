json.extract! tweet, :id, :name, :title, :content, :created_at, :updated_at
json.url tweet_url(tweet, format: :json)
