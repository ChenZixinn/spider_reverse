import json

a = "{'rId': 100900, 'ver': '1.0.6', 'ts': 1686321478550, 'cts': 1686321480550, 'brVD': [1920, 292], 'brR': [[1920, 1080], [1920, 981], 30, 30], 'bI': ['https://gz.meituan.com/meishi/', 'https://gz.meituan.com/'], 'mT': [], 'kT': [], 'aT': [], 'tT': [], 'aM': '', 'sign': 'eJw9jktOwzAQhq/SnTfIiePUibpDXSEhdhxgiN10RGxH9hgJql6l16hYcZreA9tU7P6XvpkTm5A+X8Aattuw2/fP7XphDxs2AZknnbM2GwgG/k30gcq2rDQ6Z8LeJ0ePRKFuarHCXIAiyxTNX9HJfuiVGGQJE9YtKAnDqHU3Kd2/jQcYhOZCjUqKfruVXPCWtxW4AB18sHfoCoHy5eI6lb0POKN7DUuBHonWuGua+Ytbg5TA8cnbJut4xKbQAsb3Z/NhljvOr4Q2xb3X9ev2/AvvYFPI'}"
print(json.loads(a))