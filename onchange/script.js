function change_task_status(taskId) {
    let select = document.getElementById(`task_status_${taskId}`);
    let newStatus = select.value;
    document.getElementById("message").textContent = `Status atual: ${newStatus}`;
    console.log(`Tarefa ${taskId} mudou para ${newStatus}`);
    // Simulação de atualização no servidor
    fetch(`http://localhost:3000/user/1/tasks/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
    }).then(response => console.log('Status atualizado no servidor!'));
}