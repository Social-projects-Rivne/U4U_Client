<h1>Ukraine 4 You</h1>

**Mini manual, what you need to take, for these pages:**
* places list page
* place page
* my plans page
* sign in/sign up pages
* profile page

**components path:**
`U4U_Client/src/components`

**what exactly you need:**
* header: components/header
* footer: components/footer
* container: components/container
  ```html
  <main className="content">
      <UMap /> <!-- цей компонент ви міняєте на свій, для відображення в контейнері вашої сторінки -->
  </main>
  ```

**other folders:**
* components/app - збирає компоненти
* components/uMap - відображає на головній нашу карту (в блокові container)