---
sidebar_position: 4
---

# Flask

## Introduction

Flask is a “microframework” for Python, allowing users to make basic backend APIs and webapps with a minimum of code. Flask is easy for beginners and not opinionated, so we’ll be focusing on it for today’s exercises.

## Setup

Let's use pip to install flask:`python -m pip install flask`

## Hello World

Let's create a file called `hello.py`. A very basic Flask app looks something like this:

```jsx
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"
```

First, we import flask, and create the app object using the name of the file (**name**). 

We add a route using `@app.route("/")` above our `hello()` function - this tells Flask to respond to requests for “/” (the root of your webserver) by running `hello()` and returning “Hello World!” to the user.

To run the flask application, you need to set the `FLASK_APP` environment variable, and use `flask run`  to run it. 

```bash
$ FLASK_APP=hello.py flask run
 * Running on http://localhost:5000/
```

## Create More Routes

```bash
@app.route("/my/secret/page")
def secret():
    return "Shh!"

@app.route("/user/<username>")
def user_page(username):
    return f"Welcome, {username}!"

@app.route("/blog/post/<int:post_id>")
def show_post(post_id):
    return f"This is the page for post # {post_id}"
```

In flask, we can create routes pretty easily through the `@app.route` function. It also provides a way to parse the incoming request url.

- `/user/<username>` will match all the request url starts with a /user/, and the username would be automatically be assigned to the `username` vairable.
- `/blog/post/<int:post_id>` will only match when the post_id is an integer, try to use `abc` as a post_id, it will return 404 Not Found.

## Return Type

### Data

There are mainly two different kinds of return type for a flask application. We can either return purely data in a JSON format, or we can return a template.

JSON is a format to transmit data through the network, more on that later in the course, but it looks something like this:

```jsx
{
	"device": "IPhone X",
	"screen-width": "375",
	"screen-height": "812",
}
```

So instead of returning a string, we can also return a JSON formatted data.

### Template

Another return type is a template. A template is where we include the frontend functionality with the flask backend. Personally, I do not think that this is the best use of flask, since most modern frontend frameworks (react, vue) are much better than templates. Also by seperating frontend with backend, we can write and maintain code in an easier fashion. 

We will include some example of template here nonetheless.

We will be using a template called `jinja`. This template allows you to populate your html files with data from Flask. Let's name this `hello.html`, create a folder called `templates`, and put the html file within the `templates` folder.

```html
<!doctype html>
<title>Hello from Flask</title>
{% if name %}
  <h1>Hello {{ name }}!</h1>
{% else %}
  <h1>Hello, Stranger!</h1>
{% endif %}
```

Notice the special code in `{% brackets %}`, this acts as a very simple programming language. Here it is an if statement, if the name exists, then we will return "Hello" with the name. If not, we will welcome the stranger to our flask app.

Let’s add a matching Flask function:

```python
from flask import render_template

@app.route('/hello/')
@app.route('/hello/<name>')
def hello_stranger(name=None):
    return render_template('hello.html', name=name)
```

If the user visits `/hello/` route, there will be no name variable, thus we will return `Hello, Stranger!`, otherwise we will return the one with the name.

---

**Contributors**

- [Alex Wu](https://www.linkedin.com/in/jialin-wu-658929185/)
