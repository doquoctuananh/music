
// const message = document.querySelector(".message");

const toast_item = document.querySelectorAll(".toast_item")


// message.style.animation = "fadeInleft linear 0.5s, fadeout linear 0.5s 1s forwards";

toast_item.forEach((cur,index) => {
      cur.addEventListener('click',function(e){
            let message = document.createElement("div");
            message.innerHTML = `
                  <div class="message_header">
                  <div class="title">
                        Title
                  </div>
                  <div class="message_content">
                        Ban da dang nhap ${cur.textContent}
                  </div>
            </div>
            <div class="message_footer">
                  X
            </div>
            `
            message.classList.add("message");
            document.body.appendChild(message);
            message.style.animation = "fadeInleft linear 0.5s, fadeout linear 0.5s 4s forwards";

           setTimeout(function(){
                  message.remove();
            },2000)

            message.addEventListener('click',function(e){
                  // console.log(e.target)
                  if(e.target.classList.contains("message_footer")){
                        e.currentTarget.remove()
                  }
            })

      })
})


