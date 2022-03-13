form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message=messageInput.value;
    append('You: ${message}','right');
    socket.emit('send',message);
})
const name= prompt("Enter your name to join");
socket.emit('new-user-joined', name);

socket.on('user-joined',data=>{
append('${name} joined the chat','right')
})

socket.on('recieve',data=>{
    append('${data.message}:${data.user}','left')
})
