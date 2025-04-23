// import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <aside>
        <div class="menu">
          <router-link class="button" to="/">
              <span class="material-icons">space_dashboard</span>
              <span class="text">Tableau de bord</span>
          </router-link>
          <router-link class="button" to="/course">
              <span class="material-icons">menu_book</span>
              <span class="text">Budgets</span>
          </router-link>
          <router-link class="button" to="/class">
              <span class="material-icons">groups</span>
              <span class="text">Dépenses</span>
          </router-link>
          <router-link class="button" to="/profile">
              <span class="material-icons">person</span>
              <span class="text">Mon profil</span>
          </router-link>
          <router-link class="button" to="/news">
              <span class="material-icons">info</span>
              <span class="text">Déconnexion</span>
          </router-link>
        </div>
      </aside>
    </>
  )
}

export default App
