### Project Brief Objective

- This project Only focuses on the animation and its smoothness and pixel-perfect design

- Copy and clone the url in your IDE, then type

```bash
yarn install
```

- Add a folder named `environments` in the root directory, under this folder add to file named `.env.development` and `.env.local`. Add the below code to those file to run the project
```
REACT_APP_ENV=dev
LOCAL_PORT=3000
REACT_APP_FETCH_URL=http://127.0.0.1:5000
```

- Run the project by typing

```bash
yarn start:local
```

Open [ http://localhost:3000/](http://localhost:3000/) with your browser to see the result.

- Project Tree

DEVxHUB
├── cypress
│   ├── ...
├── dist
│   ├── ...
├── environments
│   ├── .env.development
│   └── .env.local
├── node_modules
│   ├── ...
├── public
│   ├── ...
├── src
│   ├── ...
├── .env
├── .eslintrc.cjs
├── .gitignore
├── prettierignore
├── .prettierrc
├── cypress.config.js
├── index.html
├── package.json
├── post.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── yarn-error.log
└── yarn.lock

- Technology Used

├── React.Js
├── Typescript
├── Tailwind
├── GSAP
├── Prettier
├── React Devtools Inline
├── Vite
├── EsLint
├── React Icons