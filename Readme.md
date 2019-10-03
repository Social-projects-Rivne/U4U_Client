<h1>Ukraine 4 You</h1>

**Міні гайд, що потрібно взяти собі, для таких сторінок як:**
* places list page
* place page
* my plans page
* sign in/sign up pages
* profile page

**шлях до папок:**
        U4U_Client/src/components

**що саме вам потрібно:**
* header: components/header
* footer: components/footer
* container: components/container
  ```html
  <main className="content">
      <UMap /> <!-- цей компонент ви міняєте на свій, для відображення в контейнері вашої сторінки -->
  </main>
  ```

**інші папки:**
* components/app - збирає компоненти
* components/uMap - відображає на головній нашу карту (в блокові container)