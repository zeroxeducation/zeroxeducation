(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'http://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-46156385-1', 'cssscript.com');
ga('send', 'pageview');


let topics1 = document.getElementById("services-bg-1");
topics1.addEventListener("mouseover", function (event) {
    // highlight the mouseover target
    document.getElementById("services-bg-1-show").style.display = "block";
    document.getElementById("icon_01").style.display = "block";
    document.getElementById("right-text-part").style.display = "flex";
    document.getElementById("topic-description-right").innerText = "职场新人，教练陪你对话自我，向内探索分析，找到你人生发展的正确起步方向。"

});
topics1.addEventListener("mouseout", function (event) {
    // highlight the mouseover target
    document.getElementById("services-bg-1-show").style.display = "none";
    document.getElementById("right-text-part").style.display = "none";
    document.getElementById("icon_01").style.display = "none";

});


let topics2 = document.getElementById("services-bg-2");
topics2.addEventListener("mouseover", function (event) {
    // highlight the mouseover target
    document.getElementById("services-bg-2-show").style.display = "block";
    document.getElementById("icon_02").style.display = "block";
    document.getElementById("right-text-part").style.display = "flex";
    document.getElementById("topic-description-right").innerText = "十余年工作经验大咖，指导你看清前路状况，跳过职场的坑，绕开人生的弯路，在难关前给你撘把梯子，跃过障碍，轻身进发."

    // document.getElementById("icon_02").style.display = "block";

});
topics2.addEventListener("mouseout", function (event) {
    // highlight the mouseover target
    document.getElementById("services-bg-2-show").style.display = "none";
    document.getElementById("right-text-part").style.display = "none";
    document.getElementById("icon_02").style.display = "none";
});

let topics3 = document.getElementById("services-bg-3");
topics3.addEventListener("mouseover", function (event) {
    // highlight the mouseover target
    document.getElementById("services-bg-3-show").style.display = "block";
    document.getElementById("left-text-part").style.display = "flex";
    document.getElementById("icon_03").style.display = "block";
    document.getElementById("topic-description-left").innerText = "手把手找到重要的第一份工作，从技术，技能，技巧着手，稳步跃升，甩开竞争对手。别人不知道的商业项目，技术面试套路，我们带你实战训练."

});
topics3.addEventListener("mouseout", function (event) {
    // highlight the mouseover target
    document.getElementById("services-bg-3-show").style.display = "none";
    document.getElementById("left-text-part").style.display = "none";
    document.getElementById("icon_03").style.display = "none";
});


let topics4 = document.getElementById("services-bg-4");
topics4.addEventListener("mouseover", function (event) {
    // highlight the mouseover target
    document.getElementById("services-bg-4-show").style.display = "block";
    document.getElementById("left-text-part").style.display = "flex";
    document.getElementById("icon_04").style.display = "block";
    document.getElementById("topic-description-left").innerText = "全真商业环境，在完成每个商业难题的过程里，获取经验值。教练陪你设计，指导，完成，复盘分析，助你快速提升职场战斗力。"

});
topics4.addEventListener("mouseout", function (event) {
    // highlight the mouseover target
    document.getElementById("services-bg-4-show").style.display = "none";
    document.getElementById("left-text-part").style.display = "none";
    document.getElementById("icon_04").style.display = "none";
});

