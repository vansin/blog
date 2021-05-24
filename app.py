from flask import Flask, render_template

app = Flask(__name__, static_folder='docs/.vitepress/dist/assets/',
            static_url_path='/assets/', template_folder='docs/.vitepress/dist')


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    print(path)

    if path == '':
        return render_template('index.html')
    else:
        return render_template(path)
        # return render_template(path+'.html')

if __name__ == '__main__':
    app.run(port=8888, debug=True)
