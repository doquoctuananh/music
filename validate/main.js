
function Validator(option){
      
      const form = document.querySelector(option.form)
      form.addEventListener('click',function(e){
            e.preventDefault();
      })

      option.rules.forEach((cur,index) => {
            const input = document.querySelector(cur.selector)
            // const comfimPassword = document
            
            
             input.addEventListener('blur',function(e){
                  e.preventDefault()
                  if(!cur.password){
                        value = input.value;
                        let confirmValue = cur.test(value);
                        if(confirmValue === value){
                        // input.value = '';
                        console.log("Nhap thanh cong : " + confirmValue);
                        }
                        else{
                        input.value = '';
                        let form_input = e.target.parentNode;
                        let span = form_input.querySelector(".message");
                        span.textContent = confirmValue;
                        span.style.display = 'block';                       
                        }
                  }
                  else{
                        const getValuePassword = document.querySelector(cur.password).value;
                        const selector = document.querySelector(cur.selector);
                        let confirm = cur.test(selector.value);
                        if(selector.value ==''){
                              let form_input = selector.parentNode;
                              let span = form_input.querySelector(".message");
                              span.textContent = confirm;
                              span.style.display = 'block';
                              return ;
                        }
                        if(confirm !== getValuePassword){
                              let form_input = selector.parentNode;
                              let span = form_input.querySelector(".message");
                              span.textContent = "Khong khop mat khau" 
                              span.style.display = 'block'
                        }
                  }                
            })
            
            

            input.addEventListener('input',function(e){
                 let form_input = e.target.parentNode;
                 let span = form_input.querySelector(".message");
                 span.style.display= 'none';
            })
      })

      
}

const Validate = {};

Validate.isRequired = function (selector){
      // let value1 = document.querySelector(selector).value.trim();
      return {
            selector : selector,
            test: function(value){
                  return value === '' ? 'Vui long nhap truong này' : value.trim().length > 6 ? value.trim() :'Ten dang nhap lon hon 6 ki tu'; 
            }
            
      }
}

Validate.isEmail = function(selector){
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return {
            selector : selector,
            test: function (value){
                  console.log(emailRegex.test(value))
                  return emailRegex.test(value.trim()) == true ? value : value.trim() == ''? "Ban vui long nhap truong nay" : "Nhap sai dinh dang email";
            }
      }
}

Validate.isPassword = function(selector){
      return {
            selector: selector,
            test: function(value){
                  return value.trim() === '' ? "Vui long nhap truong nay" : value.trim().length > 6 ? value.trim() : "Password phai lon hon 6 ki tu";
            }     
      }
}

Validate.isConfirmPassWord = function(selector,password){
      // let getPassword = document.querySelector(password).value;
      // console.log("get:" +getPassword)
      // let valuePassword = Validate.isPassword(password).test(getPassword);
      return {
            selector: selector,
            password: password,
            test: function(value){
                  return value === '' ? "Vui long nhap truong nay" : value.trim();
            }
      }
}
