document.addEventListener('DOMContentLoaded', function reLoad() {

    function resetCard(ParentName) {
        // document.querySelectorAll(".icons-div").style.display="none"
        ParentName.children[0].style.display = "none";
    }

    function continueGame(ParentName) {
        
        ParentName.children[0].style.display = "flex";
    }

    const DataValues = [];

    document.querySelectorAll('.each-container').forEach(function (parent_container) {
        parent_container.addEventListener('click', function catchEvent() {
            continueGame(parent_container);
           
            var icon = parent_container.children[0].children[0].getAttribute('data-id')
         
            DataValues.push(icon);
            


            if(DataValues.length<=2){ 
                catchEvent();
            }else{
                if(DataValues[0]==DataValues[1]){
                    continueGame(parent_container);
                    DataValues=['']
                    alert("same same")
                }
                else{
                    resetCard(parent_container)
                    DataValues=['']
                    alert("different")
                }
            }

        


        })
    })

})

