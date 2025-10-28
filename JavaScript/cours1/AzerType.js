mots = ["Azer", "Type", "JavaScript", "Code"]
start_clock = new Date().getTime()
score = 0
let motUtilisateur =""
for (let i = 0; i < mots.length; i++){
    while(motUtilisateur != mots[i]){
        motUtilisateur = prompt("Tapez le mot :" + mots[i])
        if(motUtilisateur === mots[i]){
            console.log("Le mot est correct")
            score += 1
            break
        } else {
            console.log("Le mot est incorrect")
        }
    }
}
end_clock = new Date().getTime()
time = (end_clock - start_clock) / 1000
console.log("Vous avez mis " + time + " secondes pour terminer le test.")
console.log("Votre score est de " + score + " sur " + mots.length)


