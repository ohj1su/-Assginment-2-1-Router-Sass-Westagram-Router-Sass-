import React from 'react';
import "../Main/Main.css"


const mainWrap = () => {
    return(
<>
    <nav class="nav_head">
        <div class="head_camera">
            <img src="camera.png" width="10%" />
            <span>westagram</span>
        </div>
        <button class="head_search">검색</button>
        <div>
            <img src="explore.png" width="100%" class="head_explore" />
        </div>
        <div>
            <img src="heart.png" width="100%" class="head_heart" />
        </div>
    </nav>
    <main>
        <div class="div.feeds">
            <article>
                <div></div>
                <div></div>
                <div></div>
                <div></div>

            </article>
        </div>
        <div class="div.main_right">
            <div class="main_right_id">
            </div>
            <div class="main_right_story">
                <ul>
                    <span>스토리</span>
                    <button>모두보기</button>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>
            <div class="main_right_recommand">
                <ul>
                    <span>회원님을 위한 추천</span>
                    <button>모두보기</button>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>
            <div class="main_right_hongbo">
                <span>Instagram 정보/지원/홍보 센터/</span>
            </div>
        </div>
    </main>
</>
    );
};

export default mainWrap;