import axios from 'axios'

// Troque a BASEURL pelo endereco gerado pelo LocalTunnel
// Verifique package.json -> scripts.tunnel para mais detalhes

export const api = axios.create({
  baseURL: 'https://fine-seals-kneel-190-115-199-98.loca.lt'
})