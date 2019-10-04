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
      <UMap /> <!-- you need to change this component to your, to display it in the container -->
  </main>
  ```

**other folders:**
* components/app - collects components
* components/uMap - displays on the main page our map (in a block - container)