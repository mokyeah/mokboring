import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "animate.css";
export const shit = () => {
  const [subject, setsubject] = useState("");
  let statements = [
    `现在，解决${subject}的问题，是非常非常重要的。`,
    `我们不得不面对一个非常尴尬的事实，${subject}。`,
    `${subject}的发生，到底需要如何做到，不${subject}的发生，又会如何产生。 `,
    `而这些并不是完全重要，更加重要的问题是${subject}`,
    `${subject}，到底应该如何实现。 `,
    `带着这些问题，我们来审视一下${subject}。 `,
    `所谓${subject}，关键是${subject}需要如何写。 `,
    `我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。 `,
    `问题的关键究竟为何？ `,
    `${subject}因何而发生？ `,
    `每个人都不得不面对这些问题。 在面对这种问题时， `,
    `一般来讲，我们都必须务必慎重的考虑考虑。 `,
    `要想清楚，${subject}，到底是一种怎么样的存在。 `,
    `了解清楚${subject}到底是一种怎么样的存在，是解决一切问题的关键。 `,
    `就我个人来说，${subject}对我的意义，不能不说非常重大。 `,
    `本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 `,
    `${subject}，发生了会如何，不发生又会如何。 `,
    `在这种困难的抉择下，本人思来想去，寝食难安。 `,
    `生活中，若${subject}出现了，我们就不得不考虑它出现了的事实。 `,
    `这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 `,
    `我们都知道，只要有意义，那么就必须慎重考虑。 `,
    `可是，即使是这样，${subject}的出现仍然代表了一定的意义。 `,
    `对我个人而言，${subject}不仅仅是一个重大的事件，还可能会改变我的人生。 `,
  ];

  let quotes = [
    "伏尔泰曾经说过，不经巨大的困难，不会有伟大的事业。这不禁令我深思，",
    "富勒曾经说过，苦难磨炼一些人，也毁灭另一些人。这不禁令我深思，",
    "文森特·皮尔曾经说过，改变你的想法，你就改变了自己的世界。这不禁令我深思，",
    "拿破仑·希尔曾经说过，不要等待，时机永远不会恰到好处。这不禁令我深思，",
    "塞涅卡曾经说过，生命如同寓言，其价值不在与长短，而在与内容。这不禁令我深思，",
    "奥普拉·温弗瑞曾经说过，你相信什么，你就成为什么样的人。这不禁令我深思，",
    "吕凯特曾经说过，生命不可能有两次，但许多人连一次也不善于度过。这不禁令我深思，",
    "莎士比亚曾经说过，人的一生是短的，但如果卑劣地过这一生，就太长了。这不禁令我深思，",
    "笛卡儿曾经说过，我的努力求学没有得到别的好处，只不过是愈来愈发觉自己的无知。这不禁令我深思，",
    "左拉曾经说过，生活的道路一旦选定，就要勇敢地走到底，决不回头。这不禁令我深思，",
    "米歇潘曾经说过，生命是一条艰险的峡谷，只有勇敢的人才能通过。这不禁令我深思，",
    "吉姆·罗恩曾经说过，要么你主宰生活，要么你被生活主宰。这不禁令我深思，",
    "日本谚语曾经说过，不幸可能成为通向幸福的桥梁。这不禁令我深思，",
    "海贝尔曾经说过，人生就是学校。在那里，与其说好的教师是幸福，不如说好的教师是不幸。这不禁令我深思，",
    "杰纳勒尔·乔治·S·巴顿曾经说过，接受挑战，就可以享受胜利的喜悦。这不禁令我深思，",
    "德谟克利特曾经说过，节制使快乐增加并使享受加强。这不禁令我深思，",
    "裴斯泰洛齐曾经说过，今天应做的事没有做，明天再早也是耽误了。这不禁令我深思，",
    "歌德曾经说过，决定一个人的一生，以及整个命运的，只是一瞬之间。这不禁令我深思，",
    "卡耐基曾经说过，一个不注意小事情的人，永远不会成就大事业。这不禁令我深思，",
    "卢梭曾经说过，浪费时间是一桩大罪过。这不禁令我深思，",
    "康德曾经说过，既然我已经踏上这条道路，那么，任何东西都不应妨碍我沿着这条路走下去。这不禁令我深思，",
    "克劳斯·莫瑟爵士曾经说过，教育需要花费钱，而无知也是一样。这不禁令我深思，",
    "伏尔泰曾经说过，坚持意志伟大的事业需要始终不渝的精神。这不禁令我深思，",
    "亚伯拉罕·林肯曾经说过，你活了多少岁不算什么，重要的是你是如何度过这些岁月的。这不禁令我深思，",
    "韩非曾经说过，内外相应，言行相称。这不禁令我深思，",
    "富兰克林曾经说过，你热爱生命吗？那么别浪费时间，因为时间是组成生命的材料。这不禁令我深思，",
    "马尔顿曾经说过，坚强的信心，能使平凡的人做出惊人的事业。这不禁令我深思，",
    "笛卡儿曾经说过，读一切好书，就是和许多高尚的人谈话。这不禁令我深思，",
    "塞涅卡曾经说过，真正的人生，只有在经过艰难卓绝的斗争之后才能实现。这不禁令我深思，",
    "易卜生曾经说过，伟大的事业，需要决心，能力，组织和责任感。这不禁令我深思，",
    "歌德曾经说过，没有人事先了解自己到底有多大的力量，直到他试过以后才知道。这不禁令我深思，",
    "达尔文曾经说过，敢于浪费哪怕一个钟头时间的人，说明他还不懂得珍惜生命的全部价值。这不禁令我深思，",
    "佚名曾经说过，感激每一个新的挑战，因为它会锻造你的意志和品格。这不禁令我深思，",
    "奥斯特洛夫斯基曾经说过，共同的事业，共同的斗争，可以使人们产生忍受一切的力量。　这不禁令我深思，",
    "苏轼曾经说过，古之立大事者，不惟有超世之才，亦必有坚忍不拔之志。这不禁令我深思，",
    "王阳明曾经说过，故立志者，为学之心也；为学者，立志之事也。这不禁令我深思，",
    "歌德曾经说过，读一本好书，就如同和一个高尚的人在交谈。这不禁令我深思，",
    "乌申斯基曾经说过，学习是劳动，是充满思想的劳动。这不禁令我深思，",
    "别林斯基曾经说过，好的书籍是最贵重的珍宝。这不禁令我深思，",
    "富兰克林曾经说过，读书是易事，思索是难事，但两者缺一，便全无用处。这不禁令我深思，",
    "鲁巴金曾经说过，读书是在别人思想的帮助下，建立起自己的思想。这不禁令我深思，",
    "培根曾经说过，合理安排时间，就等于节约时间。这不禁令我深思，",
    "屠格涅夫曾经说过，你想成为幸福的人吗？但愿你首先学会吃得起苦。这不禁令我深思，",
    "莎士比亚曾经说过，抛弃时间的人，时间也抛弃他。这不禁令我深思，",
    "叔本华曾经说过，普通人只想到如何度过时间，有才能的人设法利用时间。这不禁令我深思，",
    "博曾经说过，一次失败，只是证明我们成功的决心还够坚强。 维这不禁令我深思，",
    "拉罗什夫科曾经说过，取得成就时坚持不懈，要比遭到失败时顽强不屈更重要。这不禁令我深思，",
    "莎士比亚曾经说过，人的一生是短的，但如果卑劣地过这一生，就太长了。这不禁令我深思，",
    "俾斯麦曾经说过，失败是坚忍的最后考验。这不禁令我深思，",
    "池田大作曾经说过，不要回避苦恼和困难，挺起身来向它挑战，进而克服它。这不禁令我深思，",
    "莎士比亚曾经说过，那脑袋里的智慧，就像打火石里的火花一样，不去打它是不肯出来的。这不禁令我深思，",
    "希腊曾经说过，最困难的事情就是认识自己。这不禁令我深思，",
    "黑塞曾经说过，有勇气承担命运这才是英雄好汉。这不禁令我深思，",
    "非洲曾经说过，最灵繁的人也看不见自己的背脊。这不禁令我深思，",
    "培根曾经说过，阅读使人充实，会谈使人敏捷，写作使人精确。这不禁令我深思，",
    "斯宾诺莎曾经说过，最大的骄傲于最大的自卑都表示心灵的最软弱无力。这不禁令我深思，",
    "西班牙曾经说过，自知之明是最难得的知识。这不禁令我深思，",
    "塞内加曾经说过，勇气通往天堂，怯懦通往地狱。这不禁令我深思，",
    "赫尔普斯曾经说过，有时候读书是一种巧妙地避开思考的方法。这不禁令我深思，",
    "笛卡儿曾经说过，阅读一切好书如同和过去最杰出的人谈话。这不禁令我深思，",
    "邓拓曾经说过，越是没有本领的就越加自命不凡。这不禁令我深思，",
    "爱尔兰曾经说过，越是无能的人，越喜欢挑剔别人的错儿。这不禁令我深思，",
    "老子曾经说过，知人者智，自知者明。胜人者有力，自胜者强。这不禁令我深思，",
    "歌德曾经说过，意志坚强的人能把世界放在手中像泥块一样任意揉捏。这不禁令我深思，",
    "迈克尔·F·斯特利曾经说过，最具挑战性的挑战莫过于提升自我。这不禁令我深思，",
    "爱迪生曾经说过，失败也是我需要的，它和成功对我一样有价值。这不禁令我深思，",
    "罗素·贝克曾经说过，一个人即使已登上顶峰，也仍要自强不息。这不禁令我深思，",
    "马云曾经说过，最大的挑战和突破在于用人，而用人最大的突破在于信任人。这不禁令我深思，",
    "雷锋曾经说过，自己活着，就是为了使别人过得更美好。这不禁令我深思，",
    "布尔沃曾经说过，要掌握书，莫被书掌握；要为生而读，莫为读而生。这不禁令我深思，",
    "培根曾经说过，要知道对好事的称颂过于夸大，也会招来人们的反感轻蔑和嫉妒。这不禁令我深思，",
    "莫扎特曾经说过，谁和我一样用功，谁就会和我一样成功。这不禁令我深思，",
    "马克思曾经说过，一切节省，归根到底都归结为时间的节省。这不禁令我深思，",
    "莎士比亚曾经说过，意志命运往往背道而驰，决心到最后会全部推倒。这不禁令我深思，",
    "卡莱尔曾经说过，过去一切时代的精华尽在书中。这不禁令我深思，",
    "培根曾经说过，深窥自己的心，而后发觉一切的奇迹在你自己。这不禁令我深思，",
    "罗曼·罗兰曾经说过，只有把抱怨环境的心情，化为上进的力量，才是成功的保证。这不禁令我深思，",
    "孔子曾经说过，知之者不如好之者，好之者不如乐之者。这不禁令我深思，",
    "达·芬奇曾经说过，大胆和坚定的决心能够抵得上武器的精良。这不禁令我深思，",
    "叔本华曾经说过，意志是一个强壮的盲人，倚靠在明眼的跛子肩上。这不禁令我深思，",
    "黑格尔曾经说过，只有永远躺在泥坑里的人，才不会再掉进坑里。这不禁令我深思，",
    "普列姆昌德曾经说过，希望的灯一旦熄灭，生活刹那间变成了一片黑暗。这不禁令我深思，",
    "维龙曾经说过，要成功不需要什么特别的才能，只要把你能做的小事做得好就行了。这不禁令我深思，",
    "郭沫若曾经说过，形成天才的决定因素应该是勤奋。这不禁令我深思，",
    "洛克曾经说过，学到很多东西的诀窍，就是一下子不要学很多。这不禁令我深思，",
    "西班牙曾经说过，自己的鞋子，自己知道紧在哪里。这不禁令我深思，",
    "拉罗什福科曾经说过，我们唯一不会改正的缺点是软弱。这不禁令我深思，",
    "亚伯拉罕·林肯曾经说过，我这个人走得很慢，但是我从不后退。这不禁令我深思，",
    "美华纳曾经说过，勿问成功的秘诀为何，且尽全力做你应该做的事吧。这不禁令我深思，",
    "俾斯麦曾经说过，对于不屈不挠的人来说，没有失败这回事。这不禁令我深思，",
    "阿卜·日·法拉兹曾经说过，学问是异常珍贵的东西，从任何源泉吸收都不可耻。这不禁令我深思，",
    "白哲特曾经说过，坚强的信念能赢得强者的心，并使他们变得更坚强。 这不禁令我深思，",
    "查尔斯·史考伯曾经说过，一个人几乎可以在任何他怀有无限热忱的事情上成功。 这不禁令我深思，",
    "贝多芬曾经说过，卓越的人一大优点是：在不利与艰难的遭遇里百折不饶。这不禁令我深思，",
    "莎士比亚曾经说过，本来无望的事，大胆尝试，往往能成功。这不禁令我深思，",
    "卡耐基曾经说过，我们若已接受最坏的，就再没有什么损失。这不禁令我深思，",
    "德国曾经说过，只有在人群中间，才能认识自己。这不禁令我深思，",
    "史美尔斯曾经说过，书籍把我们引入最美好的社会，使我们认识各个时代的伟大智者。这不禁令我深思，",
    "冯学峰曾经说过，当一个人用工作去迎接光明，光明很快就会来照耀着他。这不禁令我深思，",
    "吉格·金克拉曾经说过，如果你能做梦，你就能实现它。这不禁令我深思，",
  ];
  const [chose, setchose] = useState(2);
  const [copied, setcopied] = useState(false);
  const [paragraph, setparagraph] = useState("");

  const [bruh, setbruh] = useState("");
  const [explain, setexplain] = useState("");
  const [subject2, setsubject2] = useState("");
  const [p2, setp2] = useState("");
  const generate = () => {
    setp2(
      quotes[Math.floor(Math.random() * quotes.length)] +
        statements[Math.floor(Math.floor(Math.random() * statements.length))] +
        quotes[Math.floor(Math.random() * quotes.length)] +
        statements[Math.floor(Math.floor(Math.random() * statements.length))]
    );
  };
  function problem() {
    if (chose == 3) {
      setparagraph(p2);
      if (subject == "") {
        setparagraph("type something pls");
      }
    } else if (chose == 2) {
      setparagraph(
        `${subject2}到底是怎么回事？得知真相后大家都蒙圈了小编认为，这一定是还有其他原因的。${subject2}${bruh}，其实就是${explain}，大家可能会很惊讶${subject2}怎么会${bruh}呢？但事实就是这样，小编也感到非常惊讶。这就是关于${subject2}${bruh}的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦`
      );
      if (subject2 == "" || bruh == "" || explain == "") {
        setparagraph("Pls type something");
      }
    }
  }

  return (
    <div>
    <div className="w-full h-screen flex flex-col hidden-mobile bg-black text-purple-400">
      <section
        id="sec-1"
        className="text-5xl  h-screen w-full flex"
      >
       
         
        <a href="#sec-2">
          <div className="scroll-down"></div>
        </a>
      </section>
      <section id="sec-2" className="h-screen w-full flex">
        <div className="h-screen w-full flex items-center flex-row justify-center gap-12 relative p-2 absolute ">
          <div className=" ">
            <div className="text-xl md:text-3xl text-bold">废话生成器 2.0</div>

            <div className="mt-5 ">
              <>
                {chose == 2 ? (
                  <>
                    <div className="md:text-2xl mt-3 ">主体:</div>
                    <input
                      type="text"
                      className="outline outline-slate-800 h-16 w-46 text-2xl hover:outline-2 "placeholder="桃子核"
                      value={subject2}
                      onChange={(e) => setsubject2(e.target.value)}
                    ></input>

                    <div>
                      <div className=" md:text-2xl mt-3">事件:</div>
                      <input
                        type="text"
                        className="outline outline-slate-800 h-16 w-46 text-2xl hover:outline-2" placeholder="不能吞下去"
                        value={bruh}
                        onChange={(e) => setbruh(e.target.value)}
                      ></input>
                    </div>
                    <div>
                      <div className="md:text-2xl mt-3">解释:</div>
                      <input
                        type="text"
                        className="outline outline-slate-800 h-16 w-46 text-2xl hover:outline-2" placeholder="桃核太大了，吞下去容易噎着"
                        value={explain}
                        onChange={(e) => setexplain(e.target.value)}
                      ></input>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:text-2xl mt-3 ">主体:</div>
                    <input
                      type="text"
                      className="outline outline-slate-800 h-16 w-46 text-2xl hover:outline-2  "
                      value={subject}
                      onChange={(e) => setsubject(e.target.value)}
                    ></input>
                  </>
                )}
              </>
            </div>
            <div className="mt-5 flex flex-row gap-5 ">
              <div>
                <button
                  onClick={() => setchose(2)}
                  className={`bg-white rounded-sm w-28 md:w-20 h-10 flex items-center justify-center  ${
                    chose == 2 ? "border-2" : ""
                  } border-slate-500 text-xs md:text-base`}
                >
                  营销号
                </button>
              </div>
              <div
                onClick={() => setchose(3)}
                className={`bg-white rounded-sm w-14 md:w-20 h-10 flex items-center justify-center  ${
                  chose == 3 ? "border-2" : ""
                } border-slate-500 text-xs md:text-base`}
              >
                <button>废话文学</button>
              </div>
            </div>
            <div
              className="mt-3 w-32 md:w-80 h-8 md:h-10 flex items-center justify-center bg-white rounded-xl hover:bg-stone-400 hover:text-gray "
              onClick={() => {
                generate();
                problem();
              }}
            >
              生成
            </div>
          </div>

          <div className="bg-indigo-200 w-80 ans  p-3  relative " >
            <div className="text-2xl " type="text" placeholder="hi">{paragraph}</div>
          </div>
        </div>
      </section>
    
    </div>
   
    </div>
  );
};
export default shit