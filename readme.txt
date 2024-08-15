This site is published directly to seamrippers.club, via the Code402 GitHub Pages. To re-publish, check in the code to the repository.

To use new Tailwind CSS elements, the output.css must be rebuilt after making changes to the html page(s).
Run:

npx tailwindcss -i ./globals.css -o ./output.css --watch
