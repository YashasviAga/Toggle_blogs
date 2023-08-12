function invert_color() {
    let backdrop = document.getElementById('body');
    if (backdrop.classList.contains('light')) {
        backdrop.classList.remove('light');
        backdrop.classList.add('dark');
        let navbar = document.getElementById('nav');
        navbar.classList.remove('light_ver');
        navbar.classList.add('dark_ver');
        let togglebutton = document.getElementById('toggle_button');
        togglebutton.classList.remove('button_light');
        togglebutton.classList.add('button_dark');
        let slidertog = document.getElementById('slider');
        slidertog.classList.remove('sun_light');
        slidertog.classList.add('moon_light');
        let lightthemesun = document.getElementById('sun');
        lightthemesun.classList.add('hide');
        let lightthememoon = document.getElementById('moon');
        lightthememoon.classList.remove('hide');
        let blog_part1 = document.getElementById('bloger1');
        blog_part1.classList.remove('light_version');
        blog_part1.classList.add('dark_version');
        let blog_part2 = document.getElementById('bloger2');
        blog_part2.classList.remove('light_version');
        blog_part2.classList.add('dark_version');
        let blog_part3 = document.getElementById('bloger3');
        blog_part3.classList.remove('light_version');
        blog_part3.classList.add('dark_version');
        let headers1 = document.getElementById('heading1');
        headers1.classList.remove('blog_light');
        headers1.classList.add('blog_dark');
        let headers2 = document.getElementById('heading2');
        headers2.classList.remove('blog_light');
        headers2.classList.add('blog_dark');
        let headers3 = document.getElementById('heading3');
        headers3.classList.remove('blog_light');
        headers3.classList.add('blog_dark');
    }
    else{
        backdrop.classList.remove('dark');
        backdrop.classList.add('light');
        let navbar = document.getElementById('nav');
        navbar.classList.remove('dark_ver');
        navbar.classList.add('light_ver');
        let togglebutton = document.getElementById('toggle_button');
        togglebutton.classList.remove('button_dark');
        togglebutton.classList.add('button_light');
        let slidertog = document.getElementById('slider');
        slidertog.classList.remove('moon_light');
        slidertog.classList.add('sun_light');
        let lightthemesun = document.getElementById('sun');
        lightthemesun.classList.remove('hide');
        let lightthememoon = document.getElementById('moon');
        lightthememoon.classList.add('hide');
        let blog_part1 = document.getElementById('bloger1');
        blog_part1.classList.remove('dark_version');
        blog_part1.classList.add('light_version');
        let blog_part2 = document.getElementById('bloger2');
        blog_part2.classList.remove('dark_version');
        blog_part2.classList.add('light_version');
        let blog_part3 = document.getElementById('bloger3');
        blog_part3.classList.remove('dark_version');
        blog_part3.classList.add('light_version');
        let headers1 = document.getElementById('heading1');
        headers1.classList.remove('blog_dark');
        headers1.classList.add('blog_light');
        let headers2 = document.getElementById('heading2');
        headers2.classList.remove('blog_dark');
        headers2.classList.add('blog_light');
        let headers3 = document.getElementById('heading3');
        headers3.classList.remove('blog_dark');
        headers3.classList.add('blog_light');
    }

}