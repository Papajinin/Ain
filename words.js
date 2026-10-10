// ==========================================================
// words.js : 단어 데이터 (A1 1,076개)
// 형식: 한 줄에 한 단어  →  영단어|한글 뜻|품사|레벨|발음기호
//   예) afraid|두려워하는, 걱정하는|adj|A1|
// - 칸 구분은 세로 막대(|)입니다. 뜻 안에 | 를 쓰면 안 됩니다.
// - 발음기호가 없으면 마지막 | 뒤를 비워 둡니다.
// - 맨 아래 ` 표시(백틱)를 지우거나 단어 안에 넣지 마세요.
// - 단어를 추가·삭제하면 해당 품사 그룹의 Day 구성이 다시 섞입니다.
// ==========================================================
const RAW_WORDS = `
afraid|두려워하는, 걱정하는|adj|A1|
amazing|놀라운, 굉장한|adj|A1|
angry|화난, 성난|adj|A1|
bad|나쁜, 좋지 않은|adj|A1|
beautiful|아름다운, 멋진|adj|A1|
best|가장 좋은, 최고의|adj|A1|
better|더 좋은, 더 나은|adj|A1|
big|큰, 거대한|adj|A1|
black|검은, 검은색의|adj|A1|
blonde|금발의|adj|A1|
blue|파란, 파란색의|adj|A1|
bored|지루해하는, 심심한|adj|A1|
boring|지루한, 따분한|adj|A1|
brown|갈색의|adj|A1|
busy|바쁜, 통화 중인|adj|A1|
capital|대문자의, 사형의|adj|A1|
cheap|값싼, 저렴한|adj|A1|
clean|깨끗한, 청결한|adj|A1|
cold|추운, 차가운|adj|A1|
common|흔한, 공통의|adj|A1|
complete|완전한, 완료된|adj|A1|
cool|시원한, 멋진|adj|A1|
correct|맞는, 정확한|adj|A1|
dangerous|위험한|adj|A1|
dark|어두운, 짙은|adj|A1|
dear|친애하는, 소중한|adj|A1|
delicious|맛있는|adj|A1|
different|다른, 차이가 있는|adj|A1|
difficult|어려운, 힘든|adj|A1|
dirty|더러운, 지저분한|adj|A1|
early|이른, 초기의|adj|A1|
east|동쪽의, 동쪽으로 향하는|adj|A1|
easy|쉬운, 수월한|adj|A1|
excited|신이 난, 흥분한|adj|A1|
exciting|신나는, 흥미진진한|adj|A1|
expensive|비싼, 돈이 많이 드는|adj|A1|
extra|추가의, 여분의|adj|A1|
family|가족의|adj|A1|
famous|유명한|adj|A1|
fantastic|환상적인, 아주 멋진|adj|A1|
fast|빠른|adj|A1|
fat|뚱뚱한, 살찐|adj|A1|
favourite|가장 좋아하는|adj|A1|
few|소수의, 거의 없는|adj|A1|
final|마지막의, 최종적인|adj|A1|
fine|좋은, 괜찮은|adj|A1|
free|무료의, 자유로운|adj|A1|
friendly|친절한, 다정한|adj|A1|
front|앞의, 앞쪽의|adj|A1|
full|가득 찬, 배부른|adj|A1|
funny|재미있는, 웃긴|adj|A1|
good|좋은, 착한|adj|A1|
great|큰, 훌륭한|adj|A1|
green|초록색의|adj|A1|
grey|회색의|adj|A1|
happy|행복한, 기쁜|adj|A1|
hard|어려운, 딱딱한|adj|A1|
healthy|건강한, 몸에 좋은|adj|A1|
high|높은|adj|A1|
hot|더운, 뜨거운|adj|A1|
hungry|배고픈|adj|A1|
important|중요한|adj|A1|
interested|관심 있는, 흥미 있어 하는|adj|A1|
interesting|흥미로운, 재미있는|adj|A1|
key|핵심적인, 가장 중요한|adj|A1|
large|큰, 넓은|adj|A1|
late|늦은, 밤늦은|adj|A1|
left|왼쪽의|adj|A1|
light|밝은, 가벼운|adj|A1|
little|작은, 어린|adj|A1|
local|지역의, 현지의|adj|A1|
long|긴, 오랜|adj|A1|
main|주요한, 주된|adj|A1|
married|결혼한, 기혼의|adj|A1|
modern|현대의, 모던한|adj|A1|
natural|자연의, 천연의|adj|A1|
near|가까운|adj|A1|
negative|부정적인, 소극적인|adj|A1|
new|새로운, 새|adj|A1|
next|다음의, 옆의|adj|A1|
nice|좋은, 친절한|adj|A1|
north|북쪽의|adj|A1|
OK|괜찮은, 좋은|adj|A1|
old|나이 든, 낡은|adj|A1|
online|온라인의|adj|A1|
only|유일한, 오직 하나의|adj|A1|
open|열려 있는, 영업 중인|adj|A1|
opposite|맞은편의, 정반대의|adj|A1|
orange|주황색의|adj|A1|
other|다른, 그 밖의|adj|A1|
own|자신의, 직접 만든|adj|A1|
past|지난, 과거의|adj|A1|
perfect|완벽한|adj|A1|
personal|개인적인, 사적인|adj|A1|
pink|분홍색의|adj|A1|
poor|가난한, 불쌍한|adj|A1|
popular|인기 있는|adj|A1|
positive|긍정적인, 확신하는|adj|A1|
possible|가능한|adj|A1|
present|현재의, 참석한|adj|A1|
pretty|예쁜, 귀여운|adj|A1|
purple|보라색의|adj|A1|
quick|빠른, 신속한|adj|A1|
quiet|조용한|adj|A1|
ready|준비된|adj|A1|
real|진짜의, 실제의|adj|A1|
red|빨간, 빨간색의|adj|A1|
rich|부유한, 부자의|adj|A1|
right|맞는, 옳은|adj|A1|
sad|슬픈|adj|A1|
same|같은, 동일한|adj|A1|
short|짧은, 키가 작은|adj|A1|
sick|아픈, 병든|adj|A1|
similar|비슷한, 유사한|adj|A1|
slow|느린|adj|A1|
small|작은, 적은|adj|A1|
sorry|미안한, 안타까운|adj|A1|
south|남쪽의|adj|A1|
special|특별한|adj|A1|
strong|강한, 튼튼한|adj|A1|
sure|확신하는|adj|A1|
tall|키가 큰, 높은|adj|A1|
terrible|끔찍한, 지독한|adj|A1|
thirsty|목마른|adj|A1|
tired|피곤한, 지친|adj|A1|
useful|유용한, 쓸모 있는|adj|A1|
warm|따뜻한|adj|A1|
welcome|환영받는|adj|A1|
well|건강한, 좋은|adj|A1|
west|서쪽의|adj|A1|
white|하얀, 흰색의|adj|A1|
wonderful|아주 멋진, 훌륭한|adj|A1|
wrong|틀린, 잘못된|adj|A1|
yellow|노란, 노란색의|adj|A1|
young|젊은, 어린|adj|A1|
false|거짓의, 틀린|adj|A1|
true|참인, 진짜의|adj|A1|
about|약, 대략|adv|A1|
above|위에, 위로|adv|A1|
across|가로질러, 건너편에|adv|A1|
again|다시, 또|adv|A1|
ago|전에|adv|A1|
also|또한, 역시|adv|A1|
always|항상, 언제나|adv|A1|
around|주위에, 대략|adv|A1|
away|떨어져, 저리로|adv|A1|
back|뒤로, 다시|adv|A1|
behind|뒤에|adv|A1|
below|아래에|adv|A1|
down|아래로|adv|A1|
downstairs|아래층으로|adv|A1|
each|각각|adv|A1|
early|일찍|adv|A1|
east|동쪽으로|adv|A1|
else|그 밖에|adv|A1|
enough|충분히|adv|A1|
even|심지어, ~조차도|adv|A1|
ever|언젠가, 여태껏|adv|A1|
far|멀리|adv|A1|
fast|빨리|adv|A1|
first|먼저, 처음으로|adv|A1|
hard|열심히, 세게|adv|A1|
here|여기에, 이곳으로|adv|A1|
home|집에, 집으로|adv|A1|
how|어떻게, 얼마나|adv|A1|
however|하지만, 그러나|adv|A1|
in|안에, 안으로|adv|A1|
just|방금, 딱, 그저|adv|A1|
late|늦게|adv|A1|
later|나중에|adv|A1|
left|왼쪽으로|adv|A1|
long|오래, 길게|adv|A1|
lot|많이|adv|A1|
maybe|어쩌면, 아마도|adv|A1|
more|더, 더 많이|adv|A1|
most|가장, 가장 많이|adv|A1|
much|많이, 대단히|adv|A1|
near|가까이|adv|A1|
never|결코 ~않다|adv|A1|
next|다음에|adv|A1|
north|북쪽으로|adv|A1|
not|~않다|adv|A1|
now|지금|adv|A1|
o'clock|~시 정각|adv|A1|
off|떨어져, 벗어나|adv|A1|
often|자주, 흔히|adv|A1|
OK|괜찮게, 좋게|adv|A1|
on|계속해서, 위에|adv|A1|
once|한 번, 과거에|adv|A1|
online|온라인으로|adv|A1|
only|오직, 단지|adv|A1|
opposite|맞은편에|adv|A1|
out|밖으로|adv|A1|
outside|밖에, 야외에서|adv|A1|
over|넘어서, 위에|adv|A1|
pretty|꽤, 상당히|adv|A1|
probably|아마도|adv|A1|
quickly|빨리|adv|A1|
quite|꽤, 상당히|adv|A1|
really|정말로, 진짜로|adv|A1|
right|바로, 꼭|adv|A1|
same|마찬가지로|adv|A1|
so|그렇게, 아주|adv|A1|
sometimes|가끔, 때때로|adv|A1|
soon|곧, 머지않아|adv|A1|
south|남쪽으로|adv|A1|
still|여전히, 아직도|adv|A1|
then|그리고 나서, 그때|adv|A1|
there|거기에, 그곳으로|adv|A1|
through|통과하여, 지나서|adv|A1|
today|오늘|adv|A1|
together|함께, 같이|adv|A1|
tomorrow|내일|adv|A1|
tonight|오늘 밤에|adv|A1|
too|너무, 또한|adv|A1|
twice|두 번|adv|A1|
under|아래에|adv|A1|
up|위로|adv|A1|
upstairs|위층으로|adv|A1|
usually|보통, 대개|adv|A1|
very|매우, 아주|adv|A1|
well|잘, 좋게|adv|A1|
west|서쪽으로|adv|A1|
when|언제, ~할 때|adv|A1|
where|어디서, 어디로|adv|A1|
why|왜|adv|A1|
yesterday|어제|adv|A1|
be|~이다, 있다|aux. v|A1|
do|하다|aux. v|A1|
and|그리고|conj|A1|
because|~때문에|conj|A1|
but|그러나, 하지만|conj|A1|
if|만약 ~라면|conj|A1|
or|또는, 혹은|conj|A1|
so|그래서, 그러므로|conj|A1|
than|~보다|conj|A1|
that|~라는 것|conj|A1|
until|~까지|conj|A1|
when|~할 때|conj|A1|
where|~한 곳|conj|A1|
the|그 (정관사)|def. art.|A1|
all|모든|det|A1|
another|또 하나의, 다른|det|A1|
any|어떤, 조금의|det|A1|
both|양쪽의, 둘 다의|det|A1|
each|각각의|det|A1|
enough|충분한|det|A1|
every|모든, 매|det|A1|
few|소수의, 약간의|det|A1|
first|첫 번째의, 최초의|det|A1|
half|절반의, 반의|det|A1|
her|그녀의|det|A1|
his|그의|det|A1|
its|그것의|det|A1|
last|지난, 마지막의|det|A1|
little|약간의, 적은|det|A1|
lot|많은|det|A1|
many|많은|det|A1|
more|더 많은|det|A1|
most|가장 많은|det|A1|
much|많은|det|A1|
my|나의|det|A1|
no|아무런 ~도 없는|det|A1|
one|하나의, 어떤|det|A1|
our|우리의|det|A1|
second|두 번째의|det|A1|
some|몇몇의, 약간의|det|A1|
that|저, 그|det|A1|
their|그들의|det|A1|
this|이|det|A1|
what|무슨, 어떤|det|A1|
which|어느, 어떤|det|A1|
your|너의, 당신의|det|A1|
bye|안녕, 잘 가|exclam|A1|
goodbye|안녕, 잘 가|exclam|A1|
hello|안녕, 안녕하세요|exclam|A1|
hey|야, 이봐|exclam|A1|
hi|안녕|exclam|A1|
no|아니요, 아니|exclam|A1|
oh|아, 오|exclam|A1|
OK|좋아, 괜찮아|exclam|A1|
please|부탁합니다, 제발|exclam|A1|
sorry|미안해, 죄송합니다|exclam|A1|
thanks|고마워, 감사합니다|exclam|A1|
welcome|천만에요, 환영합니다|exclam|A1|
well|음, 글쎄|exclam|A1|
yeah|응, 그래|exclam|A1|
yes|네, 응|exclam|A1|
a|하나의, 어떤|indef. art.|A1|
to|부정사|INF|A1|
can|~할 수 있다|modal v|A1|
cannot|~할 수 없다|modal v|A1|
could|~할 수 있었다, ~해도 좋다|modal v|A1|
have to|~해야 한다|modal v|A1|
must|~해야 한다|modal v|A1|
should|~해야 한다|modal v|A1|
will|~할 것이다|modal v|A1|
would|~할 것이다, ~하고 싶다|modal v|A1|
action|행동, 조치|n|A1|
activity|활동|n|A1|
actor|배우, 남자 배우|n|A1|
actress|여배우|n|A1|
address|주소|n|A1|
adult|성인, 어른|n|A1|
advice|조언, 충고|n|A1|
afternoon|오후|n|A1|
age|나이, 연령|n|A1|
air|공기|n|A1|
airport|공항|n|A1|
animal|동물|n|A1|
answer|대답, 답|n|A1|
apartment|아파트|n|A1|
apple|사과|n|A1|
April|4월|n|A1|
area|지역, 구역|n|A1|
arm|팔|n|A1|
art|예술, 미술|n|A1|
article|기사, 글|n|A1|
artist|예술가, 화가|n|A1|
August|8월|n|A1|
aunt|이모, 고모, 숙모|n|A1|
autumn|가을|n|A1|
baby|아기|n|A1|
back|등, 뒤쪽|n|A1|
bag|가방|n|A1|
ball|공|n|A1|
banana|바나나|n|A1|
band|밴드, 악단|n|A1|
bank|은행|n|A1|
bath|목욕|n|A1|
bathroom|욕실, 화장실|n|A1|
beach|해변, 바닷가|n|A1|
bed|침대|n|A1|
bedroom|침실|n|A1|
beer|맥주|n|A1|
beginning|시작, 처음|n|A1|
bicycle|자전거|n|A1|
bike|자전거|n|A1|
bill|청구서, 계산서|n|A1|
bird|새|n|A1|
birthday|생일|n|A1|
black|검은색|n|A1|
blog|블로그|n|A1|
blue|파란색|n|A1|
boat|배, 보트|n|A1|
body|몸, 신체|n|A1|
book|책|n|A1|
boot|부츠, 장화|n|A1|
bottle|병|n|A1|
box|상자|n|A1|
boy|소년, 남자아이|n|A1|
boyfriend|남자친구|n|A1|
bread|빵|n|A1|
break|휴식, 쉬는 시간|n|A1|
breakfast|아침 식사|n|A1|
brother|형제, 오빠, 남동생|n|A1|
brown|갈색|n|A1|
building|건물|n|A1|
bus|버스|n|A1|
business|사업, 사업체|n|A1|
butter|버터|n|A1|
cafe|카페|n|A1|
cake|케이크|n|A1|
call|통화, 전화|n|A1|
camera|카메라|n|A1|
capital|수도|n|A1|
car|자동차|n|A1|
card|카드|n|A1|
career|경력, 직업|n|A1|
carrot|당근|n|A1|
cat|고양이|n|A1|
CD|CD|n|A1|
cent|센트|n|A1|
centre|중심, 센터|n|A1|
century|세기, 100년|n|A1|
chair|의자|n|A1|
change|잔돈, 거스름돈|n|A1|
chart|도표, 차트|n|A1|
cheese|치즈|n|A1|
chicken|닭, 닭고기|n|A1|
child|아이, 어린이|n|A1|
chocolate|초콜릿|n|A1|
cinema|영화관|n|A1|
city|도시|n|A1|
class|수업, 학급|n|A1|
classroom|교실|n|A1|
clock|시계|n|A1|
clothes|옷|n|A1|
club|클럽, 동호회|n|A1|
coat|외투, 코트|n|A1|
coffee|커피|n|A1|
cold|감기|n|A1|
college|대학|n|A1|
colour|색, 색깔|n|A1|
company|회사|n|A1|
computer|컴퓨터|n|A1|
concert|콘서트, 음악회|n|A1|
conversation|대화|n|A1|
cooking|요리|n|A1|
cost|비용, 가격|n|A1|
country|나라, 국가|n|A1|
course|강좌, 과정|n|A1|
cousin|사촌|n|A1|
cow|소, 암소|n|A1|
cream|크림|n|A1|
culture|문화|n|A1|
cup|컵, 잔|n|A1|
customer|고객, 손님|n|A1|
dad|아빠|n|A1|
dance|춤|n|A1|
dancer|댄서, 무용수|n|A1|
dancing|춤, 춤추기|n|A1|
date|날짜, 데이트|n|A1|
daughter|딸|n|A1|
day|하루, 날, 낮|n|A1|
December|12월|n|A1|
description|설명, 묘사|n|A1|
design|디자인|n|A1|
desk|책상|n|A1|
detail|세부 사항|n|A1|
dialogue|대화|n|A1|
dictionary|사전|n|A1|
diet|식단, 식이요법|n|A1|
difference|차이|n|A1|
dinner|저녁 식사|n|A1|
dish|요리, 접시|n|A1|
doctor|의사|n|A1|
dog|개|n|A1|
dollar|달러|n|A1|
door|문|n|A1|
dress|원피스, 드레스|n|A1|
drink|음료|n|A1|
driver|운전자|n|A1|
DVD|DVD|n|A1|
ear|귀|n|A1|
east|동쪽|n|A1|
egg|달걀, 계란|n|A1|
elephant|코끼리|n|A1|
email|이메일|n|A1|
end|끝, 결말|n|A1|
euro|유로|n|A1|
evening|저녁|n|A1|
event|행사, 사건|n|A1|
exam|시험|n|A1|
example|예, 예시|n|A1|
exercise|운동, 연습|n|A1|
eye|눈|n|A1|
face|얼굴|n|A1|
fact|사실|n|A1|
family|가족|n|A1|
farm|농장|n|A1|
farmer|농부|n|A1|
father|아버지|n|A1|
favourite|가장 좋아하는 것|n|A1|
February|2월|n|A1|
feeling|느낌, 감정|n|A1|
festival|축제|n|A1|
film|영화|n|A1|
fire|불, 화재|n|A1|
fish|물고기, 생선|n|A1|
flat|아파트|n|A1|
flight|비행편, 항공편|n|A1|
floor|바닥, 층|n|A1|
flower|꽃|n|A1|
food|음식|n|A1|
foot|발|n|A1|
football|축구|n|A1|
form|서식, 양식|n|A1|
Friday|금요일|n|A1|
friend|친구|n|A1|
front|앞면, 앞쪽|n|A1|
fruit|과일|n|A1|
fun|재미, 즐거움|n|A1|
future|미래|n|A1|
game|게임, 경기|n|A1|
garden|정원|n|A1|
geography|지리, 지리학|n|A1|
girl|소녀, 여자아이|n|A1|
girlfriend|여자친구|n|A1|
glass|유리잔, 유리|n|A1|
goodbye|작별 인사|n|A1|
grandfather|할아버지|n|A1|
grandmother|할머니|n|A1|
grandparent|조부모|n|A1|
green|초록색|n|A1|
grey|회색|n|A1|
group|그룹, 집단|n|A1|
guess|추측|n|A1|
guitar|기타|n|A1|
gym|체육관, 헬스장|n|A1|
hair|머리카락, 털|n|A1|
half|절반, 반|n|A1|
hand|손|n|A1|
hat|모자|n|A1|
head|머리|n|A1|
health|건강|n|A1|
hello|안녕, 인사|n|A1|
help|도움|n|A1|
history|역사|n|A1|
hobby|취미|n|A1|
holiday|휴일, 휴가|n|A1|
home|집|n|A1|
homework|숙제|n|A1|
horse|말|n|A1|
hospital|병원|n|A1|
hotel|호텔|n|A1|
hour|시간 (1시간)|n|A1|
house|집, 주택|n|A1|
husband|남편|n|A1|
ice|얼음|n|A1|
ice cream|아이스크림|n|A1|
idea|생각, 아이디어|n|A1|
information|정보|n|A1|
interest|관심, 흥미|n|A1|
internet|인터넷|n|A1|
interview|인터뷰, 면접|n|A1|
island|섬|n|A1|
jacket|재킷, 상의|n|A1|
January|1월|n|A1|
jeans|청바지|n|A1|
job|직업, 일|n|A1|
journey|여행, 여정|n|A1|
juice|주스|n|A1|
July|7월|n|A1|
June|6월|n|A1|
key|열쇠, 키|n|A1|
kilometre|킬로미터|n|A1|
kind|종류|n|A1|
kitchen|부엌, 주방|n|A1|
land|땅, 육지|n|A1|
language|언어|n|A1|
laugh|웃음, 웃음소리|n|A1|
left|왼쪽|n|A1|
leg|다리|n|A1|
lesson|수업, 교훈|n|A1|
letter|편지, 글자|n|A1|
library|도서관|n|A1|
life|삶, 인생|n|A1|
light|빛, 전등|n|A1|
line|선, 줄|n|A1|
lion|사자|n|A1|
list|목록, 리스트|n|A1|
love|사랑|n|A1|
lunch|점심 식사|n|A1|
machine|기계|n|A1|
magazine|잡지|n|A1|
man|남자, 성인 남성|n|A1|
map|지도|n|A1|
March|3월|n|A1|
market|시장|n|A1|
match|경기, 시합|n|A1|
May|5월|n|A1|
meal|식사, 끼니|n|A1|
meaning|의미, 뜻|n|A1|
meat|고기|n|A1|
meeting|회의, 모임|n|A1|
member|회원, 구성원|n|A1|
menu|메뉴, 식단|n|A1|
message|메시지|n|A1|
metre|미터|n|A1|
midnight|자정, 밤 12시|n|A1|
mile|마일|n|A1|
milk|우유|n|A1|
minute|분 (시간)|n|A1|
mistake|실수, 잘못|n|A1|
model|모형, 모델|n|A1|
moment|순간, 잠깐|n|A1|
Monday|월요일|n|A1|
money|돈|n|A1|
month|달, 월|n|A1|
morning|아침, 오전|n|A1|
mother|어머니, 엄마|n|A1|
mountain|산|n|A1|
mouse|쥐, 마우스|n|A1|
mouth|입|n|A1|
movie|영화|n|A1|
mum|엄마|n|A1|
museum|박물관|n|A1|
music|음악|n|A1|
name|이름|n|A1|
neighbour|이웃|n|A1|
news|뉴스, 소식|n|A1|
newspaper|신문|n|A1|
night|밤|n|A1|
north|북쪽|n|A1|
nose|코|n|A1|
note|메모, 짧은 편지|n|A1|
November|11월|n|A1|
number|숫자, 번호|n|A1|
nurse|간호사|n|A1|
object|물건, 물체|n|A1|
October|10월|n|A1|
office|사무실|n|A1|
onion|양파|n|A1|
opinion|의견, 견해|n|A1|
opposite|반대, 정반대|n|A1|
orange|오렌지, 주황색|n|A1|
order|주문, 순서|n|A1|
page|페이지, 쪽|n|A1|
paint|페인트, 물감|n|A1|
painting|그림|n|A1|
pair|한 쌍, 켤레|n|A1|
paper|종이|n|A1|
paragraph|단락, 문단|n|A1|
parent|부모|n|A1|
park|공원|n|A1|
part|부분, 일부|n|A1|
partner|파트너, 짝|n|A1|
party|파티|n|A1|
passport|여권|n|A1|
past|과거|n|A1|
pen|펜|n|A1|
pencil|연필|n|A1|
people|사람들|n|A1|
pepper|후추|n|A1|
period|기간, 마침표|n|A1|
person|사람|n|A1|
phone|전화, 전화기|n|A1|
photo|사진|n|A1|
photograph|사진|n|A1|
phrase|구, 어구|n|A1|
piano|피아노|n|A1|
picture|사진, 그림|n|A1|
piece|조각, 부분|n|A1|
pig|돼지|n|A1|
pink|분홍색|n|A1|
place|장소, 곳|n|A1|
plan|계획|n|A1|
plane|비행기|n|A1|
plant|식물|n|A1|
play|연극|n|A1|
player|선수, 연주자|n|A1|
point|점, 요점|n|A1|
police|경찰|n|A1|
policeman|경찰관|n|A1|
pool|수영장|n|A1|
post|우편, 게시물|n|A1|
potato|감자|n|A1|
pound|파운드|n|A1|
practice|연습, 실행|n|A1|
present|선물|n|A1|
price|가격|n|A1|
problem|문제|n|A1|
product|제품, 상품|n|A1|
programme|프로그램, 방송|n|A1|
project|프로젝트, 과제|n|A1|
purple|보라색|n|A1|
quarter|4분의 1, 15분|n|A1|
question|질문|n|A1|
radio|라디오|n|A1|
rain|비|n|A1|
reader|독자|n|A1|
reading|읽기, 독서|n|A1|
reason|이유|n|A1|
red|빨간색|n|A1|
report|보고서|n|A1|
restaurant|식당, 레스토랑|n|A1|
result|결과|n|A1|
return|귀환, 반품|n|A1|
rice|쌀, 밥|n|A1|
right|오른쪽, 권리|n|A1|
river|강|n|A1|
road|도로, 길|n|A1|
room|방|n|A1|
routine|일상, 일과|n|A1|
rule|규칙|n|A1|
salad|샐러드|n|A1|
salt|소금|n|A1|
sandwich|샌드위치|n|A1|
Saturday|토요일|n|A1|
school|학교|n|A1|
science|과학|n|A1|
scientist|과학자|n|A1|
sea|바다|n|A1|
second|초 (시간)|n|A1|
section|구역, 부분|n|A1|
sentence|문장|n|A1|
September|9월|n|A1|
sheep|양|n|A1|
shirt|셔츠|n|A1|
shoe|신발|n|A1|
shop|가게, 상점|n|A1|
shopping|쇼핑|n|A1|
show|쇼, 공연|n|A1|
shower|샤워, 샤워기|n|A1|
singer|가수|n|A1|
sister|자매, 여동생, 누나|n|A1|
situation|상황|n|A1|
skill|기술|n|A1|
skirt|치마, 스커트|n|A1|
snake|뱀|n|A1|
snow|눈|n|A1|
son|아들|n|A1|
song|노래|n|A1|
sound|소리|n|A1|
soup|수프|n|A1|
south|남쪽|n|A1|
space|우주, 공간|n|A1|
spelling|맞춤법, 철자|n|A1|
sport|스포츠, 운동|n|A1|
spring|봄|n|A1|
star|별, 스타|n|A1|
statement|진술, 말|n|A1|
station|역, 정거장|n|A1|
stop|정류장, 멈춤|n|A1|
story|이야기|n|A1|
street|거리, 도로|n|A1|
student|학생|n|A1|
study|공부, 연구|n|A1|
style|스타일, 방식|n|A1|
subject|주제, 과목|n|A1|
success|성공|n|A1|
sugar|설탕|n|A1|
summer|여름|n|A1|
sun|태양, 해|n|A1|
Sunday|일요일|n|A1|
supermarket|슈퍼마켓|n|A1|
sweater|스웨터|n|A1|
swimming|수영|n|A1|
T-shirt|티셔츠|n|A1|
table|탁자, 테이블|n|A1|
taxi|택시|n|A1|
tea|차, 홍차|n|A1|
teacher|교사, 선생님|n|A1|
team|팀|n|A1|
teenager|십 대, 청소년|n|A1|
telephone|전화, 전화기|n|A1|
television|텔레비전|n|A1|
tennis|테니스|n|A1|
test|시험, 검사|n|A1|
text|본문, 글|n|A1|
thanks|감사, 고마움|n|A1|
theatre|극장|n|A1|
thing|것, 물건|n|A1|
Thursday|목요일|n|A1|
ticket|표, 티켓|n|A1|
time|시간, 때|n|A1|
title|제목|n|A1|
today|오늘|n|A1|
toilet|화장실|n|A1|
tomato|토마토|n|A1|
tomorrow|내일|n|A1|
tonight|오늘 밤|n|A1|
tooth|이, 치아|n|A1|
topic|주제|n|A1|
tourist|관광객|n|A1|
town|마을, 도시|n|A1|
traffic|교통, 교통량|n|A1|
train|기차, 열차|n|A1|
travel|여행|n|A1|
tree|나무|n|A1|
trip|여행|n|A1|
trousers|바지|n|A1|
Tuesday|화요일|n|A1|
turn|차례, 회전|n|A1|
TV|TV, 텔레비전|n|A1|
type|종류, 유형|n|A1|
umbrella|우산|n|A1|
uncle|삼촌, 외삼촌, 고모부|n|A1|
university|대학교|n|A1|
vacation|휴가, 방학|n|A1|
vegetable|채소, 야채|n|A1|
video|동영상, 비디오|n|A1|
village|마을|n|A1|
visit|방문|n|A1|
visitor|방문객, 손님|n|A1|
waiter|웨이터, 종업원|n|A1|
walk|산책, 걷기|n|A1|
wall|벽|n|A1|
watch|손목시계|n|A1|
water|물|n|A1|
way|길, 방법|n|A1|
weather|날씨|n|A1|
website|웹사이트|n|A1|
Wednesday|수요일|n|A1|
week|주, 일주일|n|A1|
weekend|주말|n|A1|
west|서쪽|n|A1|
white|흰색|n|A1|
wife|아내|n|A1|
window|창문|n|A1|
wine|와인, 포도주|n|A1|
winter|겨울|n|A1|
woman|여성, 여자|n|A1|
word|단어, 말|n|A1|
work|일, 직장|n|A1|
worker|노동자, 직원|n|A1|
world|세상, 세계|n|A1|
writer|작가|n|A1|
writing|글, 쓰기|n|A1|
year|년, 해, 나이|n|A1|
yellow|노란색|n|A1|
yesterday|어제|n|A1|
eight|여덟, 8|num|A1|
eighteen|열여덟, 18|num|A1|
eighty|여든, 80|num|A1|
eleven|열하나, 11|num|A1|
fifteen|열다섯, 15|num|A1|
fifty|쉰, 50|num|A1|
five|다섯, 5|num|A1|
forty|마흔, 40|num|A1|
four|넷, 4|num|A1|
fourteen|열넷, 14|num|A1|
hundred|백, 100|num|A1|
million|백만, 100만|num|A1|
nine|아홉, 9|num|A1|
nineteen|열아홉, 19|num|A1|
ninety|아흔, 90|num|A1|
one|하나, 1|num|A1|
seven|일곱, 7|num|A1|
seventeen|열일곱, 17|num|A1|
seventy|일흔, 70|num|A1|
six|여섯, 6|num|A1|
sixteen|열여섯, 16|num|A1|
sixty|예순, 60|num|A1|
ten|열, 10|num|A1|
thirteen|열셋, 13|num|A1|
thirty|서른, 30|num|A1|
thousand|천, 1000|num|A1|
three|셋, 3|num|A1|
twelve|열둘, 12|num|A1|
twenty|스물, 20|num|A1|
two|둘, 2|num|A1|
fifth|다섯 번째|ord|A1|
first|첫 번째|ord|A1|
fourth|네 번째|ord|A1|
second|두 번째|ord|A1|
third|세 번째|ord|A1|
about|~에 대하여, ~에 관한|prep|A1|
above|~의 위에|prep|A1|
across|~을 가로질러, 건너편에|prep|A1|
after|~의 뒤에, ~후에|prep|A1|
around|~의 둘레에, 주위에|prep|A1|
as|~로서, ~처럼|prep|A1|
at|~에, ~에서|prep|A1|
before|~의 앞에, ~전에|prep|A1|
behind|~의 뒤에|prep|A1|
below|~의 아래에|prep|A1|
between|~의 사이에|prep|A1|
by|~의 옆에, ~에 의해|prep|A1|
down|~의 아래로, ~을 따라 내려가|prep|A1|
during|~동안에|prep|A1|
for|~을 위해, ~동안|prep|A1|
from|~로부터, ~에서|prep|A1|
in|~의 안에, ~에|prep|A1|
into|~의 안으로|prep|A1|
like|~와 같은, ~처럼|prep|A1|
near|~의 가까이에|prep|A1|
next to|~의 바로 옆에|prep|A1|
of|~의, ~에 속한|prep|A1|
off|~에서 떨어져, 벗어나|prep|A1|
on|~의 위에, ~에|prep|A1|
opposite|~의 맞은편에|prep|A1|
out|~의 밖으로|prep|A1|
over|~의 위에, ~을 넘어서|prep|A1|
past|~을 지나서|prep|A1|
than|~보다|prep|A1|
through|~을 통과하여, 관통하여|prep|A1|
to|~로, ~에게|prep|A1|
under|~의 아래에|prep|A1|
until|~까지|prep|A1|
up|~의 위로, ~을 따라 올라가|prep|A1|
with|~와 함께, ~을 가지고|prep|A1|
without|~없이|prep|A1|
all|모든 것, 모두|pron|A1|
another|또 다른 것, 또 다른 사람|pron|A1|
any|어떤 것, 누구|pron|A1|
anyone|누구, 누군가|pron|A1|
anything|어떤 것, 무엇|pron|A1|
both|둘 다, 양쪽|pron|A1|
each|각각, 각자|pron|A1|
enough|충분한 양, 충분한 것|pron|A1|
everybody|모든 사람, 모두|pron|A1|
everyone|모든 사람, 모두|pron|A1|
everything|모든 것|pron|A1|
few|소수, 소수의 사람들|pron|A1|
half|절반, 반|pron|A1|
he|그, 그 사람|pron|A1|
her|그녀를, 그녀에게|pron|A1|
him|그를, 그에게|pron|A1|
I|나, 내가|pron|A1|
it|그것|pron|A1|
little|거의 없는 것, 적은 양|pron|A1|
lot|많은 것, 다수|pron|A1|
many|많은 사람들, 많은 것|pron|A1|
me|나를, 나에게|pron|A1|
more|더 많은 것|pron|A1|
most|대부분, 가장 많은 것|pron|A1|
much|많은 것, 다량|pron|A1|
no one|아무도 (~않다)|pron|A1|
nobody|아무도 (~않다)|pron|A1|
nothing|아무것도 (~않다)|pron|A1|
one|사람, 하나, 그것|pron|A1|
other|다른 사람, 다른 것|pron|A1|
own|자신의 것|pron|A1|
same|같은 것|pron|A1|
she|그녀, 그 여자|pron|A1|
some|몇몇, 약간|pron|A1|
somebody|누군가, 어떤 사람|pron|A1|
someone|누군가, 어떤 사람|pron|A1|
something|어떤 것, 무언가|pron|A1|
that|저것, 그것|pron|A1|
them|그들을, 그것들을|pron|A1|
they|그들, 그것들|pron|A1|
this|이것|pron|A1|
us|우리를, 우리에게|pron|A1|
we|우리, 우리가|pron|A1|
what|무엇|pron|A1|
when|언제, 그때|pron|A1|
which|어느 것, 어느 쪽|pron|A1|
who|누구|pron|A1|
you|너, 당신, 너희들|pron|A1|
yourself|너 자신, 당신 자신|pron|A1|
add|더하다, 추가하다|v|A1|
agree|동의하다|v|A1|
answer|대답하다|v|A1|
arrive|도착하다|v|A1|
ask|묻다, 요청하다|v|A1|
be|~이다, 있다|v|A1|
become|~이 되다|v|A1|
begin|시작하다|v|A1|
believe|믿다|v|A1|
born|태어나다|v|A1|
break|부수다, 깨지다|v|A1|
bring|가져오다, 데려오다|v|A1|
build|짓다, 건설하다|v|A1|
buy|사다|v|A1|
call|부르다, 전화하다|v|A1|
carry|나르다, 들고 가다|v|A1|
change|바꾸다, 변하다|v|A1|
check|확인하다|v|A1|
choose|고르다, 선택하다|v|A1|
clean|청소하다, 닦다|v|A1|
climb|올라가다, 오르다|v|A1|
close|닫다|v|A1|
come|오다|v|A1|
compare|비교하다|v|A1|
complete|완료하다, 끝마치다|v|A1|
cook|요리하다|v|A1|
correct|고치다, 바로잡다|v|A1|
cost|(비용이) 들다|v|A1|
create|만들다, 창조하다|v|A1|
cut|자르다|v|A1|
dance|춤추다|v|A1|
decide|결정하다|v|A1|
describe|묘사하다, 설명하다|v|A1|
design|디자인하다, 설계하다|v|A1|
die|죽다|v|A1|
discuss|논의하다, 상의하다|v|A1|
do|하다|v|A1|
draw|그리다|v|A1|
dress|옷을 입다|v|A1|
drink|마시다|v|A1|
drive|운전하다|v|A1|
eat|먹다|v|A1|
email|이메일을 보내다|v|A1|
end|끝나다, 끝내다|v|A1|
enjoy|즐기다|v|A1|
exercise|운동하다|v|A1|
explain|설명하다|v|A1|
fall|떨어지다, 넘어지다|v|A1|
feel|느끼다|v|A1|
fill|채우다|v|A1|
find|찾다, 발견하다|v|A1|
finish|끝내다|v|A1|
fly|날다|v|A1|
follow|따라가다, 따르다|v|A1|
forget|잊다|v|A1|
form|형성하다, 만들다|v|A1|
get|얻다, 받다|v|A1|
give|주다|v|A1|
go|가다|v|A1|
grow|자라다, 기르다|v|A1|
guess|추측하다|v|A1|
happen|일어나다, 발생하다|v|A1|
hate|싫어하다|v|A1|
have|가지다|v|A1|
hear|듣다, 들리다|v|A1|
help|돕다|v|A1|
hope|바라다, 희망하다|v|A1|
imagine|상상하다|v|A1|
improve|향상시키다, 나아지다|v|A1|
include|포함하다|v|A1|
interest|관심을 끌다|v|A1|
interview|인터뷰하다, 면접을 보다|v|A1|
introduce|소개하다|v|A1|
join|가입하다, 함께하다|v|A1|
keep|유지하다, 보관하다|v|A1|
know|알다|v|A1|
laugh|웃다|v|A1|
learn|배우다|v|A1|
leave|떠나다, 남기다|v|A1|
let|~하게 하다, 허락하다|v|A1|
lie|누워 있다, 눕다|v|A1|
like|좋아하다|v|A1|
list|목록을 만들다, 나열하다|v|A1|
listen|듣다, 귀를 기울이다|v|A1|
live|살다, 거주하다|v|A1|
look|보다, 바라보다|v|A1|
lose|잃다, 지다|v|A1|
love|사랑하다|v|A1|
make|만들다|v|A1|
match|어울리다, 맞추다|v|A1|
mean|의미하다, 뜻하다|v|A1|
meet|만나다|v|A1|
miss|놓치다, 그리워하다|v|A1|
move|움직이다, 이사하다|v|A1|
name|이름을 짓다|v|A1|
need|필요하다|v|A1|
open|열다|v|A1|
order|주문하다|v|A1|
paint|그리다, 칠하다|v|A1|
park|주차하다|v|A1|
pay|지불하다, 돈을 내다|v|A1|
phone|전화하다|v|A1|
plan|계획하다|v|A1|
play|놀다, 경기를 하다|v|A1|
post|게시하다, 우편을 보내다|v|A1|
practise|연습하다|v|A1|
prefer|선호하다, 더 좋아하다|v|A1|
prepare|준비하다|v|A1|
put|놓다, 두다|v|A1|
rain|비가 오다|v|A1|
read|읽다|v|A1|
relax|휴식을 취하다, 쉬다|v|A1|
remember|기억하다|v|A1|
repeat|반복하다, 따라 하다|v|A1|
return|돌아오다, 반납하다|v|A1|
ride|타다|v|A1|
run|달리다|v|A1|
say|말하다|v|A1|
see|보다, 만나다|v|A1|
sell|팔다|v|A1|
send|보내다|v|A1|
share|공유하다, 나누다|v|A1|
shop|쇼핑하다, 장을 보다|v|A1|
show|보여주다|v|A1|
sing|노래하다|v|A1|
sit|앉다|v|A1|
sleep|자다|v|A1|
snow|눈이 오다|v|A1|
sound|~처럼 들리다|v|A1|
speak|말하다, 이야기하다|v|A1|
spell|철자를 말하다, 쓰다|v|A1|
spend|쓰다, 시간을 보내다|v|A1|
stand|서다|v|A1|
start|시작하다|v|A1|
stay|머무르다, 머물다|v|A1|
stop|멈추다, 그만두다|v|A1|
study|공부하다|v|A1|
swim|수영하다|v|A1|
take|가지고 가다, 타다, 걸리다|v|A1|
talk|말하다, 대화하다|v|A1|
teach|가르치다|v|A1|
telephone|전화하다|v|A1|
tell|말하다, 알려주다|v|A1|
test|시험하다, 검사하다|v|A1|
thank|감사하다, 고마워하다|v|A1|
think|생각하다|v|A1|
travel|여행하다|v|A1|
try|시도하다, 노력하다|v|A1|
turn|돌다, 돌리다|v|A1|
understand|이해하다|v|A1|
use|사용하다|v|A1|
visit|방문하다|v|A1|
wait|기다리다|v|A1|
wake|깨다, 깨우다|v|A1|
walk|걷다|v|A1|
want|원하다|v|A1|
wash|씻다, 빨래하다|v|A1|
watch|보다, 지켜보다|v|A1|
wear|입다, 착용하다|v|A1|
welcome|환영하다|v|A1|
win|이기다|v|A1|
work|일하다, 작동하다|v|A1|
write|쓰다|v|A1|
`;
