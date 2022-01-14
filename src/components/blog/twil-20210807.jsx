export const flaskExample = `
from flask import Flask

app = Flask(__name__)
...
app.wsgi_app = ProfilerMiddleware(app.wsgi_app, restrictions=[0.05])
`

export const nsExample = `
from flask import current_app, request
from flask_restx import Namespace, Resource
import yappi

ns = Namepace("sprocket-rocket", description="delivering sprockets to kewl users")

...
@ns.route("/profile", methods=["POST"])
class SprocketProfile(Resource):
    def post(self) -> dict:
        data = request.get_json()
        yappi.start()
        result = process_sprockets(data)
        yappi.stop()
        response = current_app.response_class(
            response=json.dumps({"result": "upload successful"}),
            status=200,
            mimetype="application/json"
        )
        return response
`

export const templateExample = `
export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <div className={"blog-post-container container"}>
      <div className={"blog-post hero is-medium has-background-grey-darker"}>
        {/* We render a blank hero-body, and hero-foot with text to 
        give the title at bottom look */}
        <div className={"hero-body"}></div>
        <div className={"hero-foot"}>
          <p
            className={"title is-size-1 is-inline has-text-white is-family-sans-serif"}
          >
            {frontmatter.title}
          </p>
          <p className={"pl-6 subtitle is-inline has-text-white"}>
            {frontmatter.date}
          </p>
        </div>
      </div>

      <div
        className={"blog-post-content mt-6"}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <footer
        className="footer"
        children={
          <span className="has-text-centered">
            ~ Thanks for reading! If you enjoyed it, consider sharing it with
            someone u like 💜 ~
          </span>
        }
      />
    </div>
  );
}
`