import { createStore } from 'vuex'
import router from '../router'
import { auth, db } from '../firebase'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from 'firebase/auth'
import { collection } from 'firebase/firestore'

export default createStore({
  state: {
    user: null
  },
  mutations: {
    SET_USER (state, user){
      state.user = user
    },
    CLEAR_USER (state){
      state.user = null
    }
  },
  actions: {
    async login ({ commit}, details){
      //
      const { email, password } = details
      try {
        await signInWithEmailAndPassword(auth, email, password)
      }catch(error){
        console.log(error.code);
        switch(error.code){
          case 'auth/user-not-found':
            alert("Usuário não encontrado")
            break
          case 'auth/wrong-password':
            alert("Senha Incorreta")
            break
          default:
            alert("Algo deu errado")
        }

        return
      }
      commit('SET_USER', auth.currentUser)
      router.push('/')
    },
    async register ({ commit}, details){
      //
      const { email, password } = details
      try {
        const cred = await createUserWithEmailAndPassword(auth, email, password)
        collection(db, 'users').doc(cred.user.uid).set({
          
        })
      }catch(error){
        switch(error.code){
          case 'auth/email-already-in-use':
            alert("Esse email já está em uso")
            break
          case 'auth/invalid-email':
            alert("Email Inválido")
            break
          case 'auth/operation-not-allowed':
            alert('Operação não permitida')
            break
          case 'auth/weak-password':
            alert("Senha muito fraca")
            break
          default:
            alert("Algo deu errado")
        }

        return
      }
      commit('SET_USER', auth.currentUser)
      router.push('/')
    },
    async logout ({ commit}){
      //
      await signOut(auth)
      commit('CLEAR_USER')
      router.push('/login')
    },

    fetchUser({ commit }){
      auth.onAuthStateChanged(async user => {
        if (user === null){
          commit('CLEAR_USER')
        }else{
          commit('SET_USER', user)
          if (router.isReady() && router.currentRoute.value.path === '/login')
            router.push('/')
        }
      })
    }
  },
  modules: {
  }
})
