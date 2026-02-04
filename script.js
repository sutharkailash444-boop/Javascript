let data = [
    {
        main_img: './1.mp4',
        small_img: 'https://images.unsplash.com/photo-1764377724194-c4b7356a4851?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
        profile_name: 'sarthaack.Sharma',
        description: 'Lorem ipsum dolor sit amet consectetur.sdfsdfdsfsf...More',
        like_count: 1000,
        comment_count: 50
    },
    {
        main_img: './2.mp4',
        small_img: 'https://images.unsplash.com/photo-1768076644388-b42d2e7aea16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D',
        profile_name: 'Kailash_suthar',
        description: 'Lorem ipsum dolor sit amet consectetur.sdfsdfdsfsf...More',
        like_count: 50,
        comment_count: 30
    }, {
        main_img: './3.mp4',
        small_img: 'https://images.unsplash.com/photo-1768590238659-b401ffa9571e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D',
        profile_name: 'ksuthar',
        description: 'Lorem ipsum dolor sit amet consectetur.sdfsdfdsfsf...More',
        like_count: 78,
        comment_count: 47
    }, {
        main_img: './1.mp4',
        small_img: 'https://plus.unsplash.com/premium_photo-1669842336799-36d654504274?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D',
        profile_name: 'manish45',
        description: 'Lorem ipsum dolor sit amet consectetur.sdfsdfdsfsf...More',
        like_count: 10,
        comment_count: 50
    }, {
        main_img: './2.mp4',
        small_img: 'https://plus.unsplash.com/premium_photo-1710849581742-f2151607c745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D',
        profile_name: 'Rahul.097',
        description: 'Lorem ipsum dolor sit amet consectetur.sdfsdfdsfsf...More',
        like_count: 340,
        comment_count: 50
    }, {
        main_img: './3.mp4',
        small_img: 'https://images.unsplash.com/photo-1707793319199-442369e65305?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D',
        profile_name: 'sarthaack.Sharma',
        description: 'Lorem ipsum dolor sit amet consectetur.sdfsdfdsfsf...More',
        like_count: 4000,
        comment_count: 50
    }, {
        main_img: './1.mp4',
        small_img: 'https://images.unsplash.com/photo-1768639527374-5a0071b66fd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D',
        profile_name: 'harsh_456',
        description: 'Lorem ipsum dolor sit amet consectetur.sdfsdfdsfsf...More',
        like_count: 650,
        comment_count: 60
    }
]

let section = document.querySelector('section');
let main_reel_box = document.querySelector('.all_reels');

let sum = '';


data.forEach(function (val) {


    sum += `<div class="reel1">
    <video autoplay loop muted class="main-img" src="${val.main_img}"></video>
    <div class="heart_box"><i class="ri-heart-fill like_heart"></i></div>
            <div class="bottom">
                <div class="profile">
                    <img class="small-img" src="${val.small_img}" alt="image nor found">
                    <p>${val.profile_name}</p>
                    <button>Follow</button>
                </div>
                
                <div class="description">
                <p>${val.description}</p>
                </div>
                
            </div>
            
                 <div class="right">
                        <div class="like">
                            <h3><i class="ri-heart-fill like_btn"></i></h3>
                            <h6 class="c">${val.like_count}</h6>
                        </div>
                        <div class="comment">
                            <h3><i class="ri-chat-3-line com_btn"></i></h3>
                            <h6>${val.comment_count}</h6>
                            <div class="comment_box"><input type="text" placeholder="Write Comment"></div>
                        </div>
                        <div class="share">
                            <h3><i class="ri-share-forward-line"></i></h3>
                            <div class="share_box">Share</div>
                            </div>
                    <div class="menu">
                      <h3><i class="ri-more-2-line"></i></h3> 
                    </div>
        </div>
        </div>`

})
main_reel_box.innerHTML = sum;

let reel = document.querySelectorAll('.reel1');

reel.forEach(function (val) {

    let pop_up_like_icon = val.querySelector('.like_heart');
    let like_box = val.querySelector('.heart_box');
    let like = val.querySelector('.like_btn');
    let btn = val.querySelector('button');
    let com_btn = val.querySelector('.comment');
    let com_box = val.querySelector('.comment_box');
    let share_btn = val.querySelector('.share');
    let share_box = val.querySelector('.share_box');
    let like_count = val.querySelector('.c');


    like_box.addEventListener('dblclick', function () {

        let count = 50;

        pop_up_like_icon.style.opacity = 1;

        like.style.color = 'red';

        pop_up_like_icon.style.transform = 'translate(-50%) rotate(0) scale(1)';

        let a = setInterval(function () {
            count--;
            pop_up_like_icon.style.top = count + '%';
        }, 10);

        setTimeout(function () {
            clearInterval(a);
            pop_up_like_icon.style.opacity = 0;
        }, 800)

        setTimeout(function () {
            pop_up_like_icon.style.transform = 'translate(-50%) rotate(-50deg) scale(0)';
            count = 50;
            pop_up_like_icon.style.top = 40 + '%'
        }, 1000)

        setTimeout(function () {
            pop_up_like_icon.style.opacity = 1;
            pop_up_like_icon.style.transform = 'translate(-50%) rotate(-50deg) scale(0)';
        }, 1200)
    })

    like.addEventListener('click', function () {

        if (like.style.color === "") {
            like.style.color = 'red';
        } else {
            like.style.color = '';
        }
    })

    btn.addEventListener('click', function () {

        if (btn.innerHTML === 'Follow') {
            btn.innerHTML = 'Unfollow'
        } else {
            btn.innerHTML = 'Follow';
        }
    })

    let com_flag = true;
    let share_flag = true;

    com_btn.addEventListener('click', function () {

        if (com_flag) {
            com_box.style.transform = 'scale(1)';
            share_box.style.transform = 'scale(0)'; 
            com_flag = false;
        } else {
            com_box.style.transform = 'scale(0)';
            com_flag = true;
        }

    })

    share_btn.addEventListener('click', function () {

        if (share_flag) {
            share_box.style.transform = 'scale(1)';
            com_box.style.transform = 'scale(0)';
            share_flag = false;
        } else {
            share_box.style.transform = 'scale(0)';
            share_flag = true;
        }

    })
});