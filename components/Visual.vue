<template>
    <div class="visual-container">
        <img src="/assets/images/main-1.jpg" class="main-photo" />
        <img src="/assets/images/main-2.jpg" class="main-photo" />
        <img src="/assets/images/main-3.jpg" class="main-photo" />
        <img src="/assets/images/main-4.jpg" class="main-photo" />
        <video autoplay loop muted class="main-video">
            <source src="https://ltb-video.mncdn.com/20241224.mp4" type="video/mp4" />
            Tarayıcınız video etiketini desteklemiyor.
        </video>
        <img src="/assets/images/main-5.jpg" class="main-photo" />
        <img src="/assets/images/main-6.jpg" class="main-photo" />
    </div>
</template>


<style>
.visual-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

}

.main-photo {
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: contain;
    margin: auto;
}

.main-video {
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: contain;
    margin: auto;

}
</style>