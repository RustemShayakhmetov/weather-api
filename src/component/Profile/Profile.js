import React from "react";
// import login

const Profile = () => {
    return(
        <>
            {localStorage.getItem('auth') ? (
                <div className="summary">
                Начинающий frontend разработчик, самостоятельно изучаю данную профессию и рад что выбрал именно это направление.
                </div>
            ) : (document.location.href = `/login`)
        }
        </>   
    )
}

export default Profile;