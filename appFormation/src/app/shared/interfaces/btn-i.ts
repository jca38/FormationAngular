export interface BtnI {
  label:string; // Titre de bouton
  route?:string; // Route éventuelle de redirection
  href?:string; // Pour pouvoir rediriger hors de l'application
  action?:boolean;
}
