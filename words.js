// ==========================================================
// words.js : 단어 데이터 (American Oxford 5000, A1~C1 5,945개)
// 형식: 한 줄에 한 단어  →  영단어|한글 뜻|품사|레벨|발음기호
//   예) afraid|두려워하는, 걱정하는|adj|A1|
// - 칸 구분은 세로 막대(|)입니다. 뜻 안에 | 를 쓰면 안 됩니다.
// - 발음기호가 없으면 마지막 | 뒤를 비워 둡니다.
// - 맨 아래 ` 표시(백틱)를 지우거나 단어 안에 넣지 마세요.
// - 단어를 추가·삭제하면 해당 품사 그룹의 Day 구성이 다시 섞입니다.
// ==========================================================
const RAW_WORDS = `
a, an|하나의, 어떤 (불특정한 단수 명사 앞)|indef. art.|A1|
abandon|버리다, 포기하다|v|B2|
ability|능력, 재능|n|A2|
able|~할 수 있는, 유능한|adj|A2|
abolish|폐지하다, 없애다|v|C1|
abortion|임신중절, 낙태|n|C1|
about|대략의, 거의 ~할 것 같은|adj|B1|
about|약, 대략|adv|A1|
about|~에 대하여, ~에 관한|prep|A1|
above|위에, 위로|adv|A1|
above|~의 위에, ~보다 높이|prep|A1|
abroad|해외로, 외국에|adv|B2|
absence|부재, 결석, 결여|n|C1|
absent|부재한, 결석한, 멍한|adj|C1|
absolute|절대적인, 완전한|adj|B2|
absolutely|전적으로, 완전히|adv|B1|
absorb|흡수하다, 받아들이다|v|B2|
abstract|추상적인, 관념적인|adj|B2|
absurd|터무니없는, 불합리한|adj|C1|
abuse|남용, 오용, 학대|n|C1|
abuse|남용하다, 오용하다, 학대하다|v|C1|
academic|학업의, 학술적인|adj|B1|
academy|학술원, 전문학교, 학림|n|C1|
accelerate|가속하다, 촉진하다|v|C1|
accent|억양, 강세|n|B2|
accept|받아들이다, 수락하다|v|A2|
acceptable|받아들일 수 있는, 허용 가능한|adj|B2|
acceptance|수용, 승낙, 인정|n|C1|
access|접근, 이용 권한|n|B1|
access|접근하다, 이용하다|v|B1|
accessible|접근하기 쉬운, 이해하기 쉬운|adj|C1|
accessory|액세서리, 부속품, 방조자|n|C1|
accident|사고, 재난|n|A2|
accidentally|우연히, 뜻하지 않게|adv|B2|
accommodate|수용하다, 편의를 제공하다|v|B2|
accommodation|숙박 시설, 편의|n|B2|
accompany|동행하다, 동반되다|v|B2|
accomplish|완수하다, 성취하다|v|B2|
accomplishment|성취, 업적|n|C1|
according to|~에 따르면|prep|A2|
accordingly|그에 맞춰, 따라서|adv|C1|
account|계좌, 계정, 설명|n|B1|
account|설명하다, 비율을 차지하다|v|B2|
accountability|책임, 설명 책임|n|C1|
accountable|책임이 있는, 설명 의무가 있는|adj|C1|
accountant|회계사|n|B2|
accumulate|축적하다, 모으다|v|C1|
accumulation|축적, 누적|n|C1|
accuracy|정확도, 정밀도|n|B2|
accurate|정확한, 정밀한|adj|B2|
accurately|정확하게, 정밀하게|adv|B2|
accusation|고발, 비난, 혐의|n|C1|
accuse|고발하다, 비난하다|v|B2|
accused|피고인, 피의자|n|C1|
achieve|달성하다, 성취하다|v|A2|
achievement|성취, 달성, 업적|n|B1|
acid|산성의, 맛이 신|adj|C1|
acid|산 (산성 물질)|n|B2|
acknowledge|인정하다, 받았음을 알리다|v|B2|
acquire|습득하다, 획득하다|v|B2|
acquisition|인수, 습득, 획득|n|C1|
acre|에이커 (약 4,047㎡)|n|B2|
across|가로질러, 건너편에|adv|A1|
across|~을 건너서, ~을 가로질러|prep|A1|
act|행위, 법률, 막|n|B1|
act|행동하다, 연기하다|v|A2|
action|행동, 동작|n|A1|
activate|작동시키다, 활성화하다|v|B2|
activation|활성화, 작동|n|C1|
active|활동적인, 적극적인|adj|A2|
activist|활동가, 운동가|n|C1|
activity|활동|n|A1|
actor|배우, 남자 배우|n|A1|
actress|여배우|n|A1|
actual|실제의, 사실상의|adj|B2|
actually|실제로, 사실은|adv|A2|
acute|격심한, 급성의, 예리한|adj|C1|
ad|광고|n|B1|
adapt|적응하다, 맞추다|v|B2|
adaptation|적응, 각색|n|C1|
add|더하다, 추가하다|v|A1|
addiction|중독|n|B2|
addition|추가, 덧셈|n|B1|
additional|추가적인, 부가적인|adj|B2|
additionally|게다가, 또한|adv|B2|
address|주소|n|A1|
address|다루다, 연설하다|v|B2|
adequate|적절한, 충분한|adj|B2|
adhere|고수하다, 부착되다, 준수하다|v|C1|
adjacent|인접한, 가까운|adj|C1|
adjust|조정하다, 조절하다|v|B2|
adjustment|조정, 적응, 조절|n|C1|
administer|관리하다, 집행하다, 투여하다|v|C1|
administration|관리, 행정, 집행부|n|B1|
administrative|행정의, 관리상의|adj|C1|
administrator|관리자, 행정관|n|C1|
admire|존경하다, 칭찬하다|v|B1|
admission|입장, 입학, 인정|n|C1|
admit|인정하다, 입장을 허락하다|v|B1|
adolescent|청소년|n|C1|
adopt|채택하다, 입양하다|v|B2|
adoption|입양, 채택|n|C1|
adult|성인의, 다 자란|adj|A2|
adult|성인, 어른|n|A1|
advance|사전의, 선행의|adj|B2|
advance|발전, 진전, 전진|n|B2|
advance|나아가다, 진전을 보이다|v|B2|
advanced|고급의, 선진의|adj|B1|
advantage|유리한 점, 이점|n|A2|
adventure|모험|n|A2|
adverse|부정적인, 불리한, 유해한|adj|C1|
advertise|광고하다|v|A2|
advertisement|광고|n|A2|
advertising|광고업, 광고하기|n|A2|
advice|조언, 충고|n|A1|
advise|조언하다, 충고하다|v|B1|
advocate|옹호자, 지지자|n|C1|
advocate|옹호하다, 지지하다|v|C1|
aesthetic|미적인, 심미적인|adj|C1|
affair|일, 문제, 사건|n|B2|
affect|영향을 미치다|v|A2|
affection|애정, 호의|n|C1|
afford|~할 여유가 있다|v|B1|
affordable|가격이 알맞은, 감당할 수 있는|adj|B2|
afraid|두려워하는, 무서워하는|adj|A1|
after|뒤에, 나중에|adv|A2|
after|~한 후에, ~하고 나서|conj|A2|
after|~의 뒤에, ~한 후에|prep|A1|
aftermath|여파, 후유증|n|C1|
afternoon|오후|n|A1|
afterward|나중에, 그 후에|adv|B2|
again|다시, 또|adv|A1|
against|~에 반대하여, ~에 맞서, ~에 기대어|prep|A2|
age|나이, 연령|n|A1|
age|나이가 들다, 노화하다|v|B1|
aged|나이가 ~세인, 고령의|adj|B2|
agency|대행사, 기관|n|B2|
agenda|안건, 의제|n|B2|
agent|에이전트, 중개인, 요원|n|B1|
aggression|공격, 침략, 공격성|n|C1|
aggressive|공격적인, 매우 적극적인|adj|B2|
ago|~ 전에|adv|A1|
agree|동의하다|v|A1|
agreement|협정, 합의, 동의|n|B1|
agricultural|농업의, 농경의|adj|C1|
agriculture|농업|n|B2|
ah|아, 아하|exclam|A2|
ahead|앞에, 미리|adv|B1|
AI|인공지능, AI|n|B1|
aid|원조, 지원|n|B2|
aid|돕다, 지원하다|v|B2|
aide|보좌관, 측근|n|C1|
aim|목표, 목적|n|B1|
aim|목표로 하다, 겨냥하다|v|B1|
air|공기|n|A1|
aircraft|항공기, 비행기|n|B2|
airline|항공사|n|A2|
airport|공항|n|A1|
alarm|경보, 알람, 불안|n|B1|
alarm|불안하게 만들다, 경보를 울리다|v|B2|
album|앨범, 음반|n|B1|
alcohol|알코올, 술|n|B1|
alcoholic|알코올이 든, 술의|adj|B1|
alert|경계하는, 기민한|adj|C1|
alert|경보, 경계 태세|n|C1|
alert|경보를 발하다, 주의를 환기하다|v|C1|
algorithm|알고리즘|n|C1|
alien|외국의, 이질적인, 생소한|adj|C1|
alien|외계인, 이방인|n|B2|
align|정렬하다, 맞추다, 제휴하다|v|C1|
alignment|정렬, 연계, 제휴|n|C1|
alike|비슷한, 서로 같은|adj|C1|
alike|비슷하게, 동등하게|adv|C1|
alive|살아 있는|adj|A2|
all|완전히, 온통|adv|A2|
all|모든|det|A1|
all|모든 사람, 모든 것|pron|A1|
all right|괜찮은, 무사한|adj|A2|
all right|괜찮게, 좋게|adv|A2|
all-time|역대의, 사상 최고의|adj|C1|
allegation|혐의, 주장|n|C1|
allege|주장하다, 혐의를 제기하다|v|C1|
allegedly|전해지는 바에 따르면, 주장하는 바에 따르면|adv|C1|
alliance|동맹, 연합|n|C1|
allocate|배분하다, 할당하다|v|C1|
allocation|배분, 할당량|n|C1|
allow|허락하다, 가능하게 하다|v|A2|
allowance|수당, 용돈, 허용치|n|C1|
ally|동맹국, 협력자|n|C1|
almost|거의|adv|A2|
alone|혼자인, 외로운|adj|A2|
alone|혼자, 단독으로|adv|A2|
along|앞으로, 따라서|adv|A2|
along|~을 따라|prep|A2|
alongside|~와 나란히, ~와 함께|prep|B2|
already|이미, 벌써|adv|A2|
also|또한, 역시|adv|A1|
alter|바꾸다, 변하다|v|B2|
alternative|대안적인, 대체 가능한|adj|B1|
alternative|대안, 대체물|n|A2|
although|비록 ~이지만, ~에도 불구하고|conj|A2|
altogether|완전히, 다 합쳐|adv|B2|
aluminum|알루미늄|n|C1|
always|항상, 언제나|adv|A1|
amateur|비전문적인, 아마추어의|adj|C1|
amateur|아마추어, 비전문가|n|C1|
amazed|깜짝 놀란, 몹시 놀란|adj|B1|
amazing|놀라운, 대단한|adj|A1|
ambassador|대사, 특사|n|C1|
ambition|야망, 포부|n|B1|
ambitious|야심 찬, 포부가 큰|adj|B2|
ambulance|구급차|n|B2|
amend|수정하다, 개정하다|v|C1|
amendment|수정안, 개정|n|C1|
amid|~의 한가운데에, ~에 둘러싸인|prep|C1|
among|~ 사이에, ~ 중에|prep|A2|
amount|양, 액수|n|A2|
amount|총액이 ~에 달하다|v|B2|
amusing|재미있는, 즐거운|adj|B2|
analogy|비유, 유추|n|C1|
analysis|분석|n|B1|
analyst|분석가|n|B2|
analytics|분석, 분석학|n|C1|
analyze|분석하다|v|A2|
ancestor|조상, 선조|n|B2|
anchor|닻, 뉴스 앵커, 정신적 지주|n|C1|
ancient|고대의, 아주 오래된|adj|A2|
and|그리고, ~와|conj|A1|
angel|천사|n|C1|
anger|분노, 화|n|B2|
angle|각도, 관점|n|B2|
angry|화난, 성난|adj|A1|
animal|동물|n|A1|
animation|만화 영화, 애니메이션|n|B2|
ankle|발목|n|A2|
anniversary|기념일|n|B2|
announce|발표하다, 알리다|v|B1|
announcement|발표, 공지|n|B1|
annoy|짜증 나게 하다, 귀찮게 하다|v|B1|
annoyed|짜증 난, 화난|adj|B1|
annoying|짜증 나는, 성가신|adj|B1|
annual|연례의, 매년의|adj|B2|
annually|매년, 연례로|adv|B2|
anonymous|익명의|adj|C1|
another|또 다른, 하나의 더|det|A1|
another|다른 사람, 다른 것|pron|A1|
answer|대답, 답|n|A1|
answer|대답하다, 답하다|v|A1|
anticipate|예상하다, 기대하다|v|B2|
anxiety|불안, 걱정|n|B2|
anxious|불안한, 염려하는, 간절히 바라는|adj|B2|
any|전혀, 조금도|adv|A2|
any|어떤, 조금의|det|A1|
any|어떤 것, 얼마간|pron|A1|
anybody|누구든, 아무도|pron|A2|
anymore|더 이상|adv|A2|
anyone|누구든, 아무도|pron|A1|
anything|무엇이든, 아무것도|pron|A1|
anyway|어쨌든, 그래도|adv|A2|
anywhere|어디에도, 어디든지|adv|A2|
anywhere|어디든지, 아무데도|pron|A2|
apart|떨어져, 따로|adv|B1|
apartment|아파트|n|A1|
apologize|사과하다|v|B1|
apology|사과|n|B2|
app|앱, 응용 프로그램|n|A2|
apparel|의류, 옷|n|C1|
apparent|분명한, 명백한, 외견상의|adj|B2|
apparently|듣자 하니, 보아하니|adv|B2|
appeal|항소, 매력, 호소|n|B2|
appeal|호소하다, 매료시키다|v|B2|
appealing|매력적인, 흥미를 끄는|adj|C1|
appear|나타나다, ~인 것 같다|v|A2|
appearance|외모, 등장|n|A2|
appetite|식욕, 욕구|n|C1|
applaud|박수를 치다, 갈채를 보내다|v|C1|
apple|사과|n|A1|
applicable|적용 가능한, 해당되는|adj|C1|
applicant|지원자, 신청자|n|B2|
application|지원서, 신청서, 앱|n|B1|
apply|지원하다, 적용하다|v|A2|
appoint|임명하다, 지정하다|v|C1|
appointment|약속, 임명|n|B1|
appreciate|고마워하다, 진가를 알아보다|v|B1|
appreciation|감사, 감상, 진가 인정|n|C1|
approach|접근 방식, 접근|n|B2|
approach|다가가다, 접근하다|v|B2|
appropriate|적절한, 알맞은|adj|B2|
approval|승인, 찬성|n|B2|
approve|승인하다, 찬성하다|v|B2|
approximately|대략, 거의|adv|B1|
April|4월|n|A1|
architect|건축가|n|A2|
architectural|건축의, 건축학적인|adj|C1|
architecture|건축, 건축 양식|n|A2|
archive|기록 보관소, 보관 파일|n|C1|
area|지역, 구역|n|A1|
arena|무대, 경기장, 분야|n|C1|
argue|다투다, 언쟁하다, 주장하다|v|A2|
argument|말다툼, 언쟁, 논쟁|n|A2|
arise|생기다, 발생하다|v|B2|
arm|팔|n|A1|
arm|무장하다, 채비하다|v|C1|
armed|무장한, 무기를 갖춘|adj|B2|
arms|무기, 군비|n|B2|
army|군대, 육군|n|A2|
around|주위에, 대략|adv|A1|
around|~의 주위에, ~의 둘레에|prep|A1|
arrange|마련하다, 정리하다|v|A2|
arrangement|준비, 마련, 배열|n|A2|
array|집합체, 배열|n|C1|
arrest|체포|n|B1|
arrest|체포하다|v|B1|
arrival|도착|n|B1|
arrive|도착하다|v|A1|
art|예술, 미술|n|A1|
article|기사, 글|n|A1|
articulate|명확히 표현하다, 또렷하게 말하다|v|C1|
artificial|인공의, 인위적인|adj|B2|
artist|예술가, 화가|n|A1|
artistic|예술적인, 예술의|adj|B2|
artwork|예술 작품, 미술품|n|B2|
as|~만큼, 마찬가지로|adv|A2|
as|~할 때, ~ 때문에, ~함에 따라|conj|A2|
as|~로서, ~처럼|prep|A1|
ash|재, 화산재|n|C1|
ashamed|부끄러운, 수치스러운|adj|B2|
ask|묻다, 부탁하다|v|A1|
asleep|잠든, 자고 있는|adj|A2|
aspiration|열망, 포부|n|C1|
aspire|열망하다, 염원하다|v|C1|
assassination|암살|n|C1|
assault|폭행, 공격|n|C1|
assault|폭행하다, 공격하다|v|C1|
assemble|모으다, 조립하다|v|C1|
assembly|집회, 조립, 의회|n|C1|
assert|주장하다, 단언하다|v|C1|
assertion|주장, 단언|n|C1|
assessment|평가, 사정|n|B2|
asset|자산, 재산|n|B2|
assign|배정하다, 맡기다|v|B2|
assignment|과제, 배정|n|B1|
assist|돕다, 거들다|v|B1|
assistance|도움, 원조|n|B2|
assistant|보조의, 조수의|adj|A2|
assistant|조수, 보조원|n|A2|
associate|연관 짓다, 어울리다|v|B2|
associated|연관된, 관련된|adj|B2|
association|협회, 연계, 연상|n|B2|
assume|가정하다, 추정하다|v|B2|
assumption|가정, 추정|n|B2|
assurance|확약, 보장, 자신감|n|C1|
assure|장담하다, 확신시키다|v|B2|
astonishing|깜짝 놀랄 만한, 놀라운|adj|B2|
asylum|망명, 망명처|n|C1|
at|~에, ~에서|prep|A1|
athlete|운동선수|n|A2|
athletic|운동 신경이 뛰어난, 운동의|adj|B2|
atmosphere|분위기, 대기|n|B1|
attach|붙이다, 첨부하다|v|B1|
attachment|첨부 파일, 애착|n|B2|
attack|공격, 습격|n|A2|
attack|공격하다|v|A2|
attain|달성하다, 도달하다|v|C1|
attempt|시도, 노력|n|B2|
attempt|시도하다|v|B2|
attend|참석하다|v|A2|
attendance|출석, 참석, 참석자 수|n|C1|
attention|주목, 차렷|exclam|A2|
attention|주의, 주목, 관심|n|A2|
attitude|태도, 자세|n|B1|
attorney|변호사|n|B2|
attorney|대리인, 법정대리인|n|C1|
attract|끌어당기다, 매혹하다|v|B1|
attraction|명소, 매력|n|B1|
attractive|매력적인|adj|A2|
attribute|자질, 속성|n|C1|
attribute|~의 탓으로 돌리다, 귀속시키다|v|C1|
auction|경매|n|C1|
audience|관중, 청중|n|A2|
audio|오디오의, 음향의|adj|A2|
audio|오디오, 음향|n|A2|
audit|회계 감사, 심사|n|C1|
August|8월|n|A1|
aunt|고모, 이모, 숙모|n|A1|
authentic|진정한, 진품의, 신뢰할 수 있는|adj|C1|
author|작가, 저자|n|A2|
authority|당국, 권한, 권위|n|B1|
authorize|권한을 주다, 승인하다|v|C1|
auto|자동차|n|C1|
automatic|자동의|adj|B1|
automatically|자동으로|adv|B1|
autonomy|자치권, 자율성|n|C1|
autumn|가을|n|C1|
availability|이용 가능성, 유효성|n|C1|
available|이용 가능한, 시간이 있는|adj|A2|
average|평균의, 보통의|adj|A2|
average|평균, 표준|n|A2|
average|평균 ~이다|v|B1|
avoid|피하다|v|A2|
await|기다리다, 고대하다|v|C1|
award|상, 수여품|n|A2|
award|수여하다, 주다|v|B1|
aware|알고 있는, 인식하는|adj|B1|
awareness|인식, 자각|n|B2|
away|멀리, 떨어져|adv|A1|
awesome|엄청난, 아주 멋진|adj|A1|
awful|끔찍한, 지독한|adj|A2|
awkward|어색한, 서투른, 다루기 힘든|adj|C1|
baby|아기|n|A1|
back|뒤쪽의|adj|A2|
back|뒤로, 다시|adv|A1|
back|등, 뒤쪽|n|A1|
back|후원하다, 지지하다|v|B2|
backdrop|배경, 배경막|n|C1|
background|배경|n|A2|
backing|지원, 후원|n|C1|
backup|예비품, 백업, 지원|n|C1|
backward|뒤로, 거꾸로|adv|B1|
bacteria|박테리아, 세균|n|B2|
bad|나쁜, 안 좋은|adj|A1|
badge|배지, 휘장|n|B2|
badly|심하게, 몹시, 나쁘게|adv|A2|
bag|가방|n|A1|
bail|보석, 보석금|n|C1|
bake|(빵 등을) 굽다|v|B1|
balance|균형, 잔고|n|B1|
balance|균형을 잡다|v|B1|
balanced|균형 잡힌, 조화로운|adj|B2|
ball|공|n|A1|
ballet|발레|n|B2|
balloon|풍선, 기구|n|B2|
ballot|투표용지, 무기명 투표|n|C1|
ban|금지, 금지령|n|B1|
ban|금지하다|v|B1|
banana|바나나|n|A1|
band|밴드, 악단|n|A1|
bang|쾅 하는 소리, 강타|n|C1|
bang|쾅 닫히다, 쾅 치다|v|C1|
bank|은행|n|A1|
bank|강둑, 둑|n|B1|
bankruptcy|파산, 도산|n|C1|
banner|현수막, 배너|n|C1|
bar|바, 술집|n|A1|
bar|막다, 금하다|v|B2|
bare|벌거벗은, 헐벗은, 가장 기본적인|adj|C1|
barely|간신히, 거의 ~않다|adv|B2|
bargain|특가품, 매매 계약|n|B2|
barrel|통, 배럴 (석유 단위)|n|C1|
barrier|장벽, 장애물|n|B2|
base|기초, 토대, 기지|n|B1|
base|기초를 두다|v|B1|
baseball|야구|n|A1|
based|~에 기반을 둔, 본거지를 둔|adj|A2|
basement|지하층, 지하실|n|B2|
basic|기본적인, 기초의|adj|B1|
basically|기본적으로, 근본적으로|adv|B2|
basis|근거, 기준, 기초|n|B1|
basket|바구니|n|B2|
basketball|농구|n|A1|
bass|베이스, 저음, 농어|n|C1|
bat|박쥐, 배트 (방망이)|n|B2|
bat|배트로 치다, 깜빡거리다|v|C1|
bath|목욕|n|A1|
bathroom|욕실, 화장실|n|A1|
battery|배터리, 건전지|n|B1|
battle|전투, 싸움|n|B1|
battle|싸우다, 투쟁하다|v|B2|
battlefield|전장, 싸움터|n|C1|
bay|만 (바다의 후미)|n|B2|
be|~이다, 있다 (진행형·수동태 조동사)|aux. v|A1|
be|~이다, 있다|v|A1|
beach|해변, 바닷가|n|A1|
beam|빛줄기, 광선, 대들보|n|C1|
bean|콩|n|A2|
bear|곰|n|A2|
bear|견디다, 감당하다|v|B2|
beast|짐승, 야수|n|C1|
beat|박자, 맥박|n|B2|
beat|이기다, 치다, 두드리다|v|B1|
beautiful|아름다운, 예쁜|adj|A1|
beauty|아름다움, 미|n|B1|
because|왜냐하면, ~ 때문에|conj|A1|
because of|~ 때문에|prep|A1|
become|~이 되다|v|A1|
bed|침대|n|A1|
bedroom|침실|n|A1|
bee|벌|n|B1|
beef|소고기|n|A2|
beer|맥주|n|A1|
before|전에, 이전에|adv|A2|
before|~하기 전에|conj|A2|
before|~의 전에, ~의 앞에|prep|A1|
beg|간청하다, 구걸하다|v|B2|
begin|시작하다|v|A1|
beginning|시작, 시작 부분|n|A1|
behalf|이익, 원조, 측|n|C1|
behave|행동하다, 처신하다|v|A2|
behavior|행동, 품행|n|A2|
behavioral|행동의, 행동과학의|adj|C1|
behind|뒤에|adv|A1|
behind|~의 뒤에|prep|A1|
being|존재, 생명체|n|B2|
belief|신념, 믿음|n|B1|
believe|믿다, 생각하다|v|A1|
bell|종, 벨|n|B1|
belong|속하다, ~의 것이다|v|A2|
beloved|사랑받는, 총애하는|adj|C1|
below|아래에|adv|A1|
below|~의 아래에|prep|A1|
belt|벨트, 허리띠|n|A2|
bench|벤치, 판사석, 벤치 선수석|n|C1|
benchmark|기준점, 벤치마크|n|C1|
bend|굽은 곳, 굴곡|n|B1|
bend|구부리다, 숙이다|v|B1|
beneath|~의 아래에, ~보다 아래에|prep|C1|
beneficial|유익한, 이로운|adj|B2|
beneficiary|수혜자, 수익자|n|C1|
benefit|혜택, 이득|n|A2|
benefit|이익을 얻다, 득을 보다|v|B1|
bent|구부러진, 굽은|adj|B2|
beside|~의 옆에|prep|B2|
besides|게다가, 뿐만 아니라|adv|B2|
besides|~ 외에도, ~에 더하여|prep|B2|
best|가장 좋은, 최고의|adj|A1|
best|가장 잘, 제일|adv|A2|
best|최선, 제일 좋은 것|n|A2|
bet|내기, 판돈|n|B2|
bet|내기하다, 확신하다|v|B2|
betray|배신하다, 은연중에 드러내다|v|C1|
better|더 좋은, 더 나은|adj|A1|
better|더 잘, 더 많이|adv|A2|
better|더 좋은 것, 더 나은 사람|n|B1|
between|사이에, 중간에|adv|A2|
between|~ 사이에|prep|A1|
beverage|음료|n|C1|
beyond|너머로, ~보다 더 나아가|adv|B2|
beyond|~의 너머에, ~을 넘어서|prep|B2|
bias|편향, 편견|n|B2|
bicycle|자전거|n|A1|
bid|입찰, 시도|n|B2|
bid|가격을 제시하다, 입찰하다|v|B2|
big|큰|adj|A1|
bike|자전거|n|A1|
bill|청구서, 계산서|n|A1|
bill|청구서를 보내다|v|B2|
billion|1,000,000,000, 십억|num|A2|
billionaire|억만장자|n|B2|
bind|묶다, 결속시키다, 구속하다|v|C1|
biography|전기, 일대기|n|C1|
biological|생물학적인, 생물의|adj|B2|
biology|생물학|n|A2|
bird|새|n|A1|
birth|출생, 탄생|n|A2|
birthday|생일|n|A1|
bishop|주교|n|C1|
bit|조금, 약간, 작은 조각|n|A2|
bite|물기, 한 입, 물린 상처|n|B1|
bite|물다, 물어뜯다|v|B1|
bitter|격렬한, 쓴, 쓰라린|adj|B2|
bizarre|기괴한, 별난|adj|C1|
black|검은, 검은색의|adj|A1|
black|검은색|n|A1|
blade|날, 칼날|n|C1|
blame|책임, 비난|n|B2|
blame|탓하다, 비난하다|v|B2|
blanket|담요|n|B2|
blast|폭발, 강한 바람|n|C1|
blast|폭파하다, 혹평하다|v|C1|
bleed|피를 흘리다, 번지다|v|C1|
blend|혼합물, 조합|n|C1|
blend|섞다, 혼합하다|v|C1|
bless|축복하다, 은혜를 베풀다|v|C1|
blessing|축복, 은총|n|C1|
blind|눈이 먼, 맹목적인|adj|B2|
block|블록, 구역, 큰 덩어리|n|A2|
block|막다, 차단하다|v|B1|
blog|블로그|n|A1|
blond|금발인|adj|A1|
blood|피, 혈액|n|A2|
blow|강타, 타격, 코풀기|n|C1|
blow|불다, 바람이 불다|v|A2|
blue|파란, 파란색의|adj|A1|
blue|파란색|n|A1|
board|판자, 게시판, 탑승|n|A2|
board|탑승하다, 승선하다|v|B1|
boast|자랑하다, 뽐내다|v|C1|
boat|보트, 배|n|A1|
body|몸, 신체|n|A1|
boil|끓다, 삶다|v|A2|
bold|용감한, 대담한, 굵은|adj|B2|
bolster|강화하다, 북돋우다|v|C1|
bomb|폭탄|n|B1|
bomb|폭격하다, 폭파하다|v|B1|
bombing|폭격, 폭탄 테러|n|B2|
bond|유대감, 채권|n|B2|
bone|뼈|n|A2|
bonus|보너스, 특별 상여금|n|C1|
book|책|n|A1|
book|예약하다|v|A2|
booking|예약|n|C1|
boom|호황, 쾅 하는 소리, 붐|n|C1|
boost|상승, 증대, 격려|n|C1|
boost|신장시키다, 북돋우다|v|C1|
boot|부츠, 장화|n|A1|
border|국경, 경계|n|B1|
border|접하다, 경계를 접하다|v|B2|
bored|지루해하는, 심심한|adj|A1|
boring|지루한, 재미없는|adj|A1|
born|태어나다 (be born 형태)|v|A1|
borrow|빌리다|v|A2|
boss|상사, 직속 상관|n|A2|
both|양쪽의, 둘 다의|det|A1|
both|둘 다, 양쪽|pron|A1|
bother|괴롭히다, 신경 쓰이게 하다|v|B1|
bottle|병|n|A1|
bottom|맨 아래의, 바닥의|adj|A2|
bottom|맨 아래, 바닥|n|A2|
bounce|튀어 오르다, 반등하다|v|C1|
bound|~할 것 같은, 꼭 ~해야 하는, 묶인|adj|B2|
boundary|경계, 분계선|n|C1|
bout|한판 승부, 발작, 경기|n|C1|
bow|활, 나비매듭, 절|n|C1|
bow|고개를 숙이다, 절하다|v|C1|
bowl|그릇, 사발|n|A2|
box|상자|n|A1|
boy|소년, 남자아이|n|A1|
boyfriend|남자친구|n|A1|
brain|뇌, 두뇌|n|A2|
brake|브레이크, 제동 장치|n|B2|
brake|제동을 걸다, 브레이크를 밟다|v|B2|
branch|나뭇가지, 지점, 부서|n|B1|
brand|상표, 브랜드|n|B1|
brand|낙인을 찍다, 브랜드를 붙이다|v|B1|
brave|용감한|adj|B1|
breach|위반, 침해, 갈라진 틈|n|C1|
breach|위반하다, 뚫다, 깨뜨리다|v|C1|
bread|빵|n|A1|
break|휴식, 쉬는 시간|n|A1|
break|부수다, 깨지다|v|A1|
breakdown|고장, 와해, 분석 명세|n|C1|
breakfast|아침 식사|n|A1|
breakthrough|획기적인 발견, 돌파구|n|C1|
breast|가슴, 유방|n|B2|
breath|숨, 호흡|n|B2|
breathe|숨을 쉬다, 호흡하다|v|B1|
breathing|호흡, 숨쉬기|n|B1|
breed|품종, 종류|n|C1|
breed|사육하다, 낳다, 유발하다|v|C1|
brick|벽돌|n|B2|
bride|신부|n|B1|
bridge|다리, 교량|n|A2|
brief|간결한, 짧은|adj|B2|
briefly|잠깐, 간략하게|adv|B2|
bright|밝은, 영리한|adj|A2|
brilliant|아주 훌륭한, 눈부신|adj|A2|
bring|가져오다, 데려오다|v|A1|
broad|넓은, 광범위한|adj|B2|
broadband|광대역 인터넷, 브로드밴드|n|C1|
broadcast|방송|n|B2|
broadcast|방송하다, 널리 알리다|v|B2|
broadcaster|방송인, 방송사|n|B2|
broadly|대략적으로, 널리|adv|B2|
broken|부서진, 고장 난|adj|A2|
brother|형제, 남동생, 오빠|n|A1|
brown|갈색의|adj|A1|
brown|갈색|n|A1|
browser|웹 브라우저|n|C1|
brush|솔, 붓|n|A2|
brush|솔질하다, 빗다|v|A2|
brutal|잔혹한, 잔인한, 악랄한|adj|C1|
bubble|거품, 방울|n|B1|
buck|달러 (구어)|n|B2|
buddy|친구, 동료|n|C1|
budget|예산, 예산안|n|B2|
buffer|완충 장치, 완충제|n|C1|
bug|벌레, 오류 (버그)|n|B2|
build|짓다, 건설하다|v|A1|
building|건물|n|A1|
bulk|대부분, 대량, 부피|n|C1|
bullet|총알|n|B2|
bunch|다발, 송이|n|B2|
bundle|묶음, 꾸러미|n|C1|
bundle|묶다, 한데 묶어 팔다|v|C1|
burden|부담, 짐|n|C1|
burial|매장, 장례|n|C1|
burn|화상|n|B2|
burn|타다, 태우다|v|A2|
burst|터지다, 폭발하듯 튀어나오다|v|C1|
bury|묻다, 매장하다|v|B1|
bus|버스|n|A1|
bush|덤불, 관목|n|B2|
business|사업, 사업체|n|A1|
businessman|사업가, 남성 사업가|n|A2|
busy|바쁜|adj|A1|
but|하지만, 그러나|conj|A1|
but|~을 제외하고|prep|B2|
butter|버터|n|A1|
button|단추, 버튼|n|A2|
buy|사다, 구입하다|v|A1|
buzz|웅성거림, 활기, 소문|n|C1|
buzz|윙윙거리다, 활기가 넘치다|v|C1|
by|지나서, 곁에|adv|B1|
by|~ 옆에, ~에 의하여, ~까지|prep|A1|
bye|안녕, 잘 가|exclam|A1|
cabin|통나무집, 선실, 객실|n|B2|
cabinet|내각, 보관장|n|C1|
cable|전선, 케이블, 밧줄|n|B1|
cafe|카페|n|A1|
cake|케이크|n|A1|
calculate|계산하다, 산출하다|v|B2|
calculation|계산, 산출|n|C1|
call|통화, 전화|n|A1|
call|부르다, 전화하다|v|A1|
calm|침착한, 차분한|adj|B1|
calm|평온, 침착|n|B1|
calm|진정시키다, 가라앉히다|v|B1|
camera|카메라|n|A1|
camp|캠프, 야영지|n|A2|
camp|야영하다, 캠핑하다|v|A2|
campaign|캠페인, 사회 운동|n|B1|
campaign|캠페인을 벌이다, 운동을 하다|v|B1|
camping|캠핑, 야영|n|A2|
campus|캠퍼스, 교정|n|A2|
can|~할 수 있다|modal v|A1|
can|캔, 통조림|n|A2|
canal|운하, 수로|n|B2|
cancel|취소하다|v|B2|
cancellation|취소|n|C1|
cancer|암|n|B2|
candidate|후보자, 지원자|n|B1|
candle|양초|n|B2|
candy|사탕|n|A2|
cannot|~할 수 없다|modal v|A1|
canvas|캔버스 천, 화폭|n|C1|
cap|모자, 뚜껑|n|B1|
capability|역량, 능력|n|C1|
capable|역량 있는, 유능한, ~할 능력이 있는|adj|B2|
capacity|수용력, 용량, 능력|n|B2|
capital|대문자의|adj|A1|
capital|수도|n|A1|
capitalism|자본주의|n|C1|
capitalist|자본주의의|adj|C1|
captain|주장, 선장, 기장|n|B1|
caption|자막, 설명문|n|B2|
caption|자막을 달다, 캡션을 달다|v|B2|
capture|포획, 생포|n|B2|
capture|포착하다, 포로로 잡다|v|B2|
car|자동차|n|A1|
carbon|탄소|n|B2|
card|카드|n|A1|
care|돌봄, 보살핌, 주의|n|A2|
care|상관하다, 보살피다|v|A2|
career|경력, 직업|n|A1|
careful|조심스러운, 주의 깊은|adj|A2|
carefully|조심스럽게, 주의 깊게|adv|A2|
careless|부주의한, 경솔한|adj|B1|
cargo|화물, 적재물|n|C1|
carpet|카펫, 양탄자|n|A2|
carriage|마차, 기차 객차|n|C1|
carrot|당근|n|A1|
carry|나르다, 들고 가다|v|A1|
cartoon|만화|n|A2|
carve|조각하다, 새기다|v|C1|
case|경우, 사건, 상자|n|A2|
cash|현금|n|A2|
casino|카지노, 도박장|n|C1|
cast|출연진, 깁스|n|B2|
cast|던지다, 배역을 맡기다|v|B2|
castle|성, 성곽|n|B2|
casual|격식 없는, 평상시의, 우연한|adj|B2|
casualty|사상자, 피해자|n|C1|
cat|고양이|n|A1|
catalog|목록, 카탈로그|n|C1|
catch|잡기, 포획량|n|B2|
catch|잡다, 타다, 걸리다|v|A2|
category|범주, 분류|n|B1|
cater|맞추다, 요구를 들어주다, 출장 연회를 공급하다|v|C1|
cattle|소, 가축|n|C1|
cause|원인, 이유|n|A2|
cause|야기하다, 초래하다|v|A2|
caution|주의, 조심|n|C1|
cautious|신중한, 조심스러운|adj|C1|
cave|동굴|n|B2|
cease|중단하다, 그치다|v|C1|
ceiling|천장|n|B1|
celebrate|축하하다, 기념하다|v|A2|
celebration|축하 행사, 기념|n|B1|
celebrity|유명 인사, 연예인|n|A2|
cell|세포, 감방|n|A2|
cemetery|공동묘지|n|C1|
cent|센트 (동전 단위)|n|A1|
center|중심, 센터|n|A1|
center|중심에 놓다, 집중시키다|v|B1|
central|중심의, 중앙의|adj|B1|
century|세기, 100년|n|A2|
ceremony|의식, 식|n|B1|
certain|확실한, 특정한|adj|A2|
certainly|분명히, 틀림없이|adv|A2|
certainty|확실성, 확신|n|B2|
certificate|증명서, 자격증|n|B2|
chain|사슬, 체인, 연쇄점|n|B1|
chain|사슬로 묶다|v|B2|
chair|의자|n|A1|
chair|의장을 맡다, 주재하다|v|B2|
challenge|도전, 난제|n|B1|
challenge|이의를 제기하다, 도전하다|v|B2|
challenging|도전적인, 까다로운, 힘든|adj|B2|
chamber|회의실, 방, 의원|n|C1|
champion|챔피언, 우승자|n|B1|
championship|선수권 대회, 챔피언전|n|B2|
chance|기회, 가능성|n|A2|
change|변화, 잔돈|n|A1|
change|바꾸다, 변하다|v|A1|
channel|경로, 채널, 해협|n|B1|
chaos|혼란, 혼돈|n|C1|
chapter|장, 챕터|n|B1|
character|성격, 등장인물|n|A2|
characteristic|특유의, 독특한|adj|B2|
characteristic|특징, 특성|n|B2|
characterize|특징짓다, 성격을 나타내다|v|C1|
charge|요금, 청구, 책임|n|B1|
charge|청구하다, 기소하다, 충전하다|v|B1|
charity|자선 단체, 자선|n|A2|
charm|매력, 부적|n|C1|
charming|매력적인, 멋진|adj|C1|
chart|도표, 차트|n|A1|
chart|도표로 나타내다, 기록하다|v|B2|
charter|헌장, 공문서|n|C1|
chase|추격, 쫓음|n|B2|
chase|쫓다, 추격하다|v|B2|
chat|잡담, 대화|n|A2|
chat|잡담하다, 채팅하다|v|A2|
cheap|저렴한, 싼|adj|A1|
cheap|싸게, 저렴하게|adv|B1|
cheat|사기꾼, 부정행위|n|B1|
cheat|속이다, 부정행위를 하다|v|B1|
check|수표, 확인|n|A2|
check|확인하다, 점검하다|v|A1|
cheek|뺨, 볼|n|B2|
cheer|환호, 응원|n|B2|
cheer|환호하다, 응원하다|v|B2|
cheerful|쾌활한, 명랑한|adj|B1|
cheese|치즈|n|A1|
chef|요리사, 주방장|n|A2|
chemical|화학의, 화학적인|adj|B1|
chemical|화학 물질|n|B1|
chemistry|화학|n|A2|
chest|가슴, 상자|n|B1|
chicken|닭, 닭고기|n|A1|
chief|주요한, 최고의|adj|B2|
chief|추장, 우두머리|n|B2|
child|아이, 어린이|n|A1|
childhood|어린 시절, 유년기|n|B1|
chill|한기, 냉기|n|C1|
chill|차게 식히다, 오싹하게 만들다|v|C1|
chip|조각, 칩|n|A2|
chocolate|초콜릿|n|A1|
choice|선택, 선택권|n|A2|
choir|성가대, 합창단|n|C1|
choose|선택하다, 고르다|v|A1|
chop|잘게 썰다, 쪼개다|v|B2|
chronic|만성적인, 상습적인|adj|C1|
chunk|덩어리, 상당한 양|n|C1|
church|교회|n|A2|
cigarette|담배|n|A2|
circle|원, 동그라미|n|A2|
circle|동그라미를 치다|v|A2|
circuit|순환로, 회로|n|B2|
circulate|순환하다, 유포되다, 돌다|v|C1|
circulation|순환, 발행 부수, 유통|n|C1|
circumstance|상황, 정황|n|B2|
cite|인용하다, 언급하다|v|B2|
citizen|시민, 국민|n|B2|
citizenship|시민권, 국적|n|C1|
city|도시|n|A1|
civic|시민의, 도시의|adj|C1|
civil|시민의, 민간의|adj|B2|
civilian|민간인의, 비군사적인|adj|C1|
civilian|민간인|n|C1|
civilization|문명, 문명사회|n|B2|
claim|주장, 청구|n|B1|
claim|주장하다, 요구하다|v|B1|
clarify|명확하게 하다, 분명히 말하다|v|B2|
clarity|명확성, 명료함|n|C1|
clash|충돌, 대립|n|C1|
class|수업, 학급|n|A1|
classic|고전적인, 전형적인|adj|B2|
classic|고전, 명작|n|B2|
classical|클래식의, 고전적인|adj|A2|
classification|분류, 등급 매기기|n|C1|
classify|분류하다, 구분하다|v|B2|
classroom|교실|n|A1|
clause|조항, 절|n|B1|
clean|깨끗한|adj|A1|
clean|청소하다, 닦다|v|A1|
clear|명확한, 맑은|adj|A2|
clear|치우다, 맑아지다, 명확히 하다|v|B1|
clearly|분명하게, 또렷하게|adv|A2|
clerk|점원, 사무원|n|A2|
clever|영리한, 기발한|adj|B1|
click|클릭 (소리)|n|B1|
click|클릭하다, 딸깍 소리를 내다|v|B1|
client|의뢰인, 고객|n|B1|
cliff|절벽, 벼랑|n|B2|
climate|기후|n|A2|
climb|등반, 오르기|n|B1|
climb|올라가다, 오르다|v|A1|
cling|매달리다, 집착하다|v|C1|
clinic|클리닉, 진료소|n|B2|
clinical|임상의, 냉철한|adj|C1|
clip|클립, 짤막한 영상|n|B2|
clock|시계|n|A1|
close|가까운, 친한|adj|A2|
close|가까이, 바짝|adv|B1|
close|끝, 종결|n|B2|
close|닫다, 끝나다|v|A1|
closed|닫힌, 영업을 안 하는|adj|A2|
closely|면밀히, 밀접하게|adv|B2|
closet|벽장, 옷장|n|A2|
closure|폐쇄, 종료, 종결감|n|C1|
cloth|옷감, 천|n|B1|
clothes|옷|n|A1|
clothing|옷, 의류|n|A2|
cloud|구름|n|A2|
club|클럽, 동호회|n|A1|
clue|단서, 실마리|n|B1|
cluster|무리, 군집, 송이|n|C1|
coach|코치, 지도자|n|A2|
coach|지도하다, 훈련시키다|v|B1|
coal|석탄|n|B1|
coalition|연합, 연립 정당|n|C1|
coast|해안, 바닷가|n|A2|
coastal|해안의, 연안의|adj|C1|
coat|코트, 외투|n|A1|
cocktail|칵테일, 혼합물|n|C1|
code|암호, 부호, 규정|n|A2|
coffee|커피|n|A1|
cognitive|인지의, 인지적인|adj|C1|
coin|동전|n|B1|
coincide|일치하다, 동시에 발생하다|v|C1|
coincidence|우연의 일치|n|B2|
cold|추운, 차가운|adj|A1|
cold|감기, 추위|n|A1|
collaborate|협력하다, 공동 연구하다|v|C1|
collaboration|협력, 공동 작업|n|C1|
collapse|붕괴, 와해|n|B2|
collapse|붕괴하다, 무너지다|v|B2|
colleague|동료|n|A2|
collect|모으다, 수집하다|v|A2|
collection|수집품, 소장품|n|B1|
collective|집단의, 공동의|adj|C1|
collector|수집가|n|B2|
college|대학|n|A1|
collision|충돌, 추돌, 대립|n|C1|
colony|식민지, 집단|n|B2|
color|색, 색깔|n|A1|
colored|색깔이 있는, 다채로운|adj|B1|
colorful|다채로운, 화려한|adj|B2|
column|기둥, 칼럼, 세로 열|n|A2|
columnist|칼럼니스트|n|C1|
combat|전투, 싸움|n|C1|
combat|싸우다, 방지하다|v|C1|
combination|조합, 결합|n|B2|
combine|결합하다, 섞다|v|B1|
come|오다|v|A1|
comeback|복귀, 컴백, 재기|n|C1|
comedian|코미디언, 개그맨|n|B2|
comedy|코미디, 희극|n|A2|
comfort|편안함, 위로|n|B2|
comfort|위로하다, 달래다|v|B2|
comfortable|편안한, 쾌적한|adj|A2|
comic|희극의, 재미있는|adj|B2|
comic|만화책|n|B2|
command|명령, 지휘, 통솔|n|B2|
command|명령하다, 지휘하다|v|B2|
commander|지휘관, 사령관|n|B2|
commence|시작하다, 개시하다|v|C1|
comment|논평, 언급, 댓글|n|A2|
comment|논평하다, 의견을 밝히다|v|B1|
commentary|논평, 해설, 중계|n|C1|
commentator|해설자, 논평가|n|C1|
commerce|상업, 교역|n|C1|
commercial|상업적인, 영리 목적의|adj|B1|
commercial|상업 광고|n|B1|
commission|위원회, 수수료|n|B2|
commission|의뢰하다, 위임하다|v|B2|
commissioner|위원, 경찰청장|n|C1|
commit|(범죄 등을) 저지르다, 약속하다, 헌신하다|v|B1|
commitment|헌신, 약속, 전념|n|B2|
committee|위원회|n|B2|
commodity|원자재, 상품|n|C1|
common|흔한, 공통의|adj|A1|
commonly|흔히, 보통|adv|B2|
communicate|의사소통하다, 연락하다|v|A2|
communication|의사소통, 통신|n|B1|
communist|공산주의의|adj|C1|
community|지역 사회, 공동체|n|A2|
companion|동반자, 동행|n|C1|
company|회사|n|A1|
comparable|비교할 만한, 필적하는|adj|C1|
comparative|비교의, 상대적인|adj|B2|
compare|비교하다|v|A1|
comparison|비교|n|B1|
compassion|연민, 동정심|n|C1|
compel|강요하다, 굴복시키다|v|C1|
compelling|설득력 있는, 강력한, 주목하지 않을 수 없는|adj|C1|
compensate|보상하다, 벌충하다|v|C1|
compensation|보상, 배상금|n|C1|
compete|경쟁하다, 겨루다|v|A2|
competence|역량, 유능함|n|C1|
competent|유능한, 역량 있는|adj|C1|
competition|경쟁, 대회|n|A2|
competitive|경쟁적인, 경쟁력 있는|adj|B1|
competitor|경쟁자, 경쟁 상대|n|B1|
compile|취합하다, 편찬하다|v|C1|
complain|불평하다, 항의하다|v|A2|
complaint|불평, 항의, 민원|n|B1|
complement|보완하다, 돋보이게 하다|v|C1|
complete|완전한, 완료된|adj|A1|
complete|완료하다, 끝마치다|v|A1|
completely|완전히, 전적으로|adv|A2|
completion|완료, 완성|n|B2|
complex|복잡한|adj|B1|
complex|복합 단지, 콤플렉스|n|B2|
complexity|복잡성, 복잡함|n|C1|
compliance|준수, 순응|n|C1|
complicated|복잡한|adj|B2|
complication|합병증, 난제|n|C1|
comply|준수하다, 따르다|v|C1|
component|요소, 부품|n|B2|
compose|구성하다, 작곡하다|v|B2|
composer|작곡가|n|B2|
composition|구성, 작곡, 구성비|n|C1|
compound|화합물, 복합체|n|B2|
comprehensive|포괄적인, 종합적인|adj|B2|
comprise|구성되다, 차지하다|v|B2|
compromise|타협, 절충안|n|C1|
compromise|타협하다, 절충하다, 훼손하다|v|C1|
compulsory|의무적인, 필수의|adj|B2|
computer|컴퓨터|n|A1|
conceal|감추다, 숨기다|v|C1|
concede|인정하다, 양보하다|v|C1|
conceive|구상하다, 상상하다, 임신하다|v|C1|
concentrate|집중하다, 전념하다|v|B1|
concentration|집중, 농도|n|B2|
concept|개념, 관념|n|B2|
concern|우려, 걱정, 관심사|n|B2|
concern|영향을 미치다, 우려하게 하다|v|B2|
concerned|걱정하는, 염려하는, 관련된|adj|B2|
concert|콘서트, 연주회|n|A1|
concession|양보, 인정, 할인|n|C1|
conclude|결론을 내리다, 끝나다|v|B1|
conclusion|결론, 결말|n|B1|
concrete|구체적인, 콘크리트로 된|adj|B2|
concrete|콘크리트|n|B2|
condemn|규탄하다, 비난하다, 선고를 내리다|v|C1|
condition|상태, 조건|n|A2|
conduct|행동, 수행|n|B2|
conduct|실시하다, 지휘하다|v|B2|
conference|회의, 학회|n|A2|
confess|자백하다, 고백하다|v|C1|
confession|고백, 자백|n|C1|
confidence|자신감, 신뢰|n|B2|
confident|자신감 있는, 확신하는|adj|B1|
configuration|구성, 설정, 배치|n|C1|
confine|국한하다, 가두다|v|C1|
confirm|확인하다, 확정하다|v|B1|
confirmation|확인, 확정|n|C1|
conflict|갈등, 분쟁|n|B2|
conflict|상충하다, 대립하다|v|B2|
confront|직면하다, 맞서다|v|C1|
confrontation|대치, 대립|n|C1|
confuse|혼란스럽게 하다, 어리둥절하게 하다|v|B1|
confused|혼란스러워하는, 어리둥절한|adj|B1|
confusing|혼란스러운, 헷갈리게 하는|adj|B2|
confusion|혼란, 당혹|n|B2|
congratulate|축하하다|v|C1|
congregation|신도단, 집회|n|C1|
congress|의회, 국회|n|B2|
congressional|의회의, 미 의회의|adj|C1|
connect|연결하다, 이어지다|v|A2|
connected|연결된, 관련 있는|adj|A2|
connection|연결, 관련, 접속|n|B1|
connectivity|연결성, 접속성|n|C1|
conquer|정복하다, 극복하다|v|C1|
conscience|양심|n|C1|
conscious|의식하는, 자각하는|adj|B2|
consciousness|의식, 자각|n|C1|
consecutive|연속적인, 연이은|adj|C1|
consensus|합의, 의견 일치|n|C1|
consent|동의, 승낙|n|C1|
consent|동의하다, 승낙하다|v|C1|
consequence|결과, 영향|n|B1|
consequently|결과적으로, 따라서|adv|B2|
conservation|보존, 보호|n|B2|
conservative|보수적인|adj|B2|
conservative|보수주의자|n|B2|
conserve|보존하다, 아끼다|v|C1|
consider|고려하다, 생각하다|v|A2|
considerable|상당한, 많은|adj|B2|
considerably|상당히, 꽤|adv|B2|
consideration|고려 사항, 배려|n|B2|
consist|구성되다, 이루어져 있다|v|B1|
consistency|일관성, 지속성|n|C1|
consistent|일관된, 일치하는|adj|B2|
consistently|일관되게, 지속적으로|adv|B2|
console|제어반, 콘솔|n|B2|
consolidate|강화하다, 통합하다|v|C1|
conspiracy|음모, 모의|n|B2|
constant|끊임없는, 지속적인|adj|B2|
constantly|끊임없이, 계속해서|adv|B2|
constitute|구성하다, 간주되다|v|C1|
constitution|헌법, 체질, 구조|n|C1|
constitutional|헌법의, 입헌의, 체질의|adj|C1|
constraint|제약, 제한|n|C1|
construct|건설하다, 구성하다|v|B2|
construction|건설, 공사|n|B2|
consult|상담하다, 상의하다|v|B2|
consultant|자문위원, 컨설턴트|n|B2|
consultation|협의, 자문, 진찰|n|C1|
consume|소비하다, 섭취하다|v|B1|
consumer|소비자|n|B1|
consumption|소비, 소모|n|B2|
contact|연락, 접촉|n|B1|
contact|연락하다, 접촉하다|v|B1|
contain|포함하다, 담고 있다|v|A2|
container|용기, 컨테이너|n|B1|
contemplate|고려하다, 심사숙고하다|v|C1|
contemporary|현대의, 동시대의|adj|B2|
contempt|경멸, 모욕, 멸시|n|C1|
contend|주장하다, 겨루다, 다투다|v|C1|
contender|도전자, 경쟁자|n|C1|
content|만족하는, 기꺼이 받아들이는|adj|C1|
content|내용물, 만족|n|B1|
contention|주장, 논쟁, 다툼|n|C1|
contest|대회, 콘테스트|n|B2|
contest|이의를 제기하다, 다투다|v|B2|
context|맥락, 문맥|n|A2|
continent|대륙|n|A2|
continually|끊임없이, 줄곧|adv|C1|
continue|계속하다, 계속되다|v|A2|
continuous|계속되는, 지속적인|adj|B1|
contract|계약, 계약서|n|B2|
contract|수축하다, 계약하다|v|B2|
contractor|계약자, 시공업체|n|C1|
contrary|반대의, 정반대되는|adj|C1|
contrary|반대, 정반대되는 것|n|C1|
contrast|대조, 대비|n|B1|
contrast|대조하다, 대비를 이루다|v|B1|
contribute|기여하다, 기부하다|v|B2|
contribution|기여, 기부금|n|B2|
contributor|기여자, 기고가, 기부자|n|C1|
control|통제, 제어, 지배|n|A2|
control|통제하다, 제어하다|v|A2|
controversial|논란의 여지가 있는, 논쟁적인|adj|B2|
controversy|논란, 논쟁|n|B2|
convenience|편의, 편리함|n|B2|
convenient|편리한, 사용하기 편한|adj|B1|
convention|관습, 관례, 총회|n|B2|
conventional|전통적인, 관습적인|adj|B2|
conversation|대화|n|A1|
conversion|전환, 개종, 개조|n|C1|
convert|전환하다, 개조하다|v|B2|
convey|전달하다, 실어 나르다|v|B2|
convict|유죄를 선고하다, 유죄로 판결하다|v|C1|
conviction|유죄 판결, 확신, 신념|n|C1|
convince|설득하다, 확신시키다|v|B1|
convinced|확신하는|adj|B2|
convincing|설득력 있는|adj|B2|
cook|요리사|n|A2|
cook|요리하다|v|A1|
cookie|쿠키|n|A2|
cooking|요리|n|A1|
cool|시원한, 멋진|adj|A1|
cool|식히다, 차분해지다|v|B1|
cooperate|협력하다, 협조하다|v|C1|
cooperation|협력, 협조|n|C1|
cooperative|협력하는, 협동의|adj|C1|
coordinate|조정하다, 조화시키다|v|C1|
coordination|조정, 협조, 조화|n|C1|
coordinator|조정관, 진행자|n|C1|
cope|대처하다, 감당하다|v|B2|
copper|구리, 동|n|C1|
copy|복사본, 복사|n|A2|
copy|복사하다, 베끼다|v|A2|
copyright|저작권|n|C1|
core|핵심의, 가장 중요한|adj|B2|
core|핵심, 중심부|n|B2|
corn|옥수수|n|B1|
corner|모퉁이, 구석|n|A2|
corporate|기업의, 법인의|adj|B2|
corporation|기업, 회사|n|B2|
correct|맞는, 정확한|adj|A1|
correct|고치다, 바로잡다|v|A1|
correction|수정, 정정, 교정|n|C1|
correctly|정확하게, 바르게|adv|A2|
correlate|상관관계를 입증하다, 연관되다|v|C1|
correlation|상관관계, 연관성|n|C1|
correspond|부합하다, 해당하다, 서신을 주고받다|v|C1|
correspondent|특파원, 통신원|n|C1|
corresponding|해당하는, 상응하는, 일치하는|adj|C1|
corridor|복도, 회랑|n|B2|
corrupt|부패한, 타락한|adj|C1|
corruption|부패, 타락, 오염|n|C1|
cost|비용, 가격|n|A1|
cost|비용이 들다|v|A1|
costly|비용이 많이 드는, 대가가 큰|adj|C1|
costume|의상, 분장|n|B1|
cotton|목화, 면|n|B1|
could|~할 수 있었다, ~할 수도 있다|modal v|A1|
council|의회, 자문위원회|n|B2|
councilor|의원, 고문|n|C1|
counseling|상담, 심리 치료|n|C1|
counselor|상담사, 고문|n|C1|
count|계산, 수치|n|B1|
count|세다, 계산하다|v|A2|
counter|반박하다, 논박하다|v|C1|
counter|계산대, 조리대|n|B2|
counterpart|상대방, 대응 관계에 있는 사람|n|C1|
countless|무수한, 셀 수 없이 많은|adj|C1|
country|나라, 국가|n|A1|
countryside|시골, 전원|n|B1|
county|군, 자치주 (행정 구역)|n|B2|
coup|쿠데타, 불시의 일격|n|C1|
couple|한 쌍, 부부, 연인|n|A2|
courage|용기|n|B2|
course|강좌, 코스|n|A1|
court|법원, 코트, 경기장|n|B1|
courtesy|예의, 공손함, 호의|n|C1|
cousin|사촌|n|A1|
cover|덮개, 표지|n|B1|
cover|덮다, 가리다|v|A2|
coverage|보도 범위, 보장|n|B2|
covered|덮인, 가려진|adj|B1|
cow|소, 암소|n|A1|
cowboy|카우보이|n|B2|
crack|갈라진 틈, 금|n|B2|
crack|금 가다, 깨지다|v|B2|
craft|공예, 기술|n|B2|
craft|공들여 만들다, 정교하게 제작하다|v|C1|
crash|충돌, 추락, 폭락|n|B2|
crash|충돌하다, 추락하다|v|B2|
crawl|기어가다, 몹시 느리게 가다|v|C1|
crazy|미친, 말도 안 되는|adj|A2|
cream|크림색의, 부드러운|adj|B1|
cream|크림|n|A1|
create|만들다, 창조하다|v|A1|
creation|창작, 창조, 창작물|n|B2|
creative|창의적인, 창조적인|adj|A2|
creativity|창의성, 독창성|n|B2|
creator|창작자, 창조자|n|C1|
creature|생물, 살아 있는 존재|n|B2|
credibility|신뢰성, 신뢰도|n|C1|
credible|신뢰할 수 있는, 믿을 만한|adj|C1|
credit|신용, 외상|n|A2|
credit|입금하다, 공로를 인정하다|v|B2|
creep|살금살금 움직이다, 서서히 다가오다|v|C1|
crew|승무원, 팀|n|B2|
crime|범죄|n|A2|
criminal|범죄의, 형사상의|adj|B1|
criminal|범죄자|n|A2|
crisis|위기|n|B2|
criterion|기준|n|B2|
critic|비평가, 평론가|n|B2|
critical|비판적인, 대단히 중요한, 중대한|adj|B2|
critically|비판적으로, 결정적으로|adv|B2|
criticism|비판, 비난|n|B2|
criticize|비판하다, 비난하다|v|B2|
critique|비평, 평론|n|C1|
cross|십자가, X표|n|A2|
cross|건너다, 가로지르다|v|A2|
crowd|군중, 인파|n|A2|
crowded|붐비는, 복잡한|adj|A2|
crown|왕관, 정수리|n|C1|
crucial|중대한, 결정적인|adj|B2|
crude|천연 그대로의, 조잡한, 거친|adj|C1|
cruel|잔인한, 잔혹한|adj|B1|
cruise|크루즈 유람선, 유람선 여행|n|B2|
cruise|순항하다, 유람선을 타고 여행하다|v|B2|
crush|으스러뜨리다, 짓밟다, 제압하다|v|C1|
cry|외침, 울음소리|n|B2|
cry|울다, 소리치다|v|A2|
cryptocurrency|가상화폐, 암호화폐|n|C1|
crystal|결정체, 크리스털|n|C1|
cue|신호, 단서|n|B2|
cult|추종 집단의, 열광적 숭배를 받는|adj|C1|
cult|추종 집단, 열광, 신흥 종교|n|C1|
cultivate|경작하다, 기르다, 함양하다|v|C1|
cultural|문화의, 문화적인|adj|B1|
culture|문화|n|A1|
cupboard|찬장, 벽장|n|B1|
cure|치료제, 치료법|n|B2|
cure|치료하다, 고치다|v|B2|
curiosity|호기심, 진기함|n|C1|
curious|궁금한, 호기심이 많은|adj|B2|
curly|곱슬곱슬한|adj|A2|
currency|통화, 화폐|n|B1|
current|현재의, 지금의|adj|B1|
current|흐름, 전류, 조류|n|B2|
currently|현재, 지금은|adv|B1|
curriculum|교육과정, 커리큘럼|n|B2|
curtain|커튼|n|B1|
curve|곡선, 커브|n|B2|
curve|굽다, 곡선을 이루다|v|B2|
curved|굽은, 곡선 모양의|adj|B2|
custody|양육권, 구금, 보관|n|C1|
custom|관습, 풍습|n|B1|
customer|고객, 손님|n|A1|
cut|베인 상처, 삭감, 컷|n|B1|
cut|자르다, 베다|v|A1|
cute|귀여운, 매력적인|adj|B2|
cycle|순환, 자전거 타기|n|A2|
cycle|자전거를 타다|v|A2|
dad|아빠|n|A1|
daily|매일의, 일상의|adj|A2|
daily|매일, 날마다|adv|B1|
dairy|유제품의, 낙농업의|adj|B2|
dairy|낙농업, 유제품 판매점|n|B2|
dam|댐|n|C1|
damage|손상, 피해|n|B1|
damage|손상을 주다, 피해를 입히다|v|B1|
damaging|손상을 입히는, 해로운|adj|C1|
dance|춤|n|A1|
dance|춤추다|v|A1|
dancer|무용수, 댄서|n|A1|
dancing|춤추기, 댄스|n|A1|
danger|위험|n|A2|
dangerous|위험한|adj|A1|
dare|감히 ~하다, 엄두를 내다|v|B2|
dark|어두운, 캄캄한|adj|A1|
dark|어둠|n|A2|
darkness|어둠, 암흑|n|B2|
data|자료, 데이터|n|A2|
database|데이터베이스|n|B2|
date|날짜, 데이트|n|A1|
date|날짜를 적다, 연애하다|v|B2|
daughter|딸|n|A1|
dawn|새벽, 동틀 녘, 시작|n|C1|
day|하루, 낮|n|A1|
dead|죽은|adj|A2|
deadline|마감 시간, 마감일|n|B2|
deadly|치명적인|adj|B2|
deal|거래, 합의|n|B1|
deal|다루다, 거래하다|v|A2|
dealer|상인, 딜러|n|B2|
dear|친애하는, 소중한|adj|A1|
death|죽음, 사망|n|A2|
debate|토론, 논쟁|n|B2|
debate|토론하다, 숙고하다|v|B2|
debris|잔해, 쓰레기|n|C1|
debt|빚, 부채|n|B2|
debut|데뷔, 첫 등장|n|C1|
decade|10년|n|B1|
December|12월|n|A1|
decent|괜찮은, 품위 있는, 적절한|adj|B2|
decide|결정하다|v|A1|
decision|결정, 판단|n|A2|
decision-making|의사 결정|n|C1|
decisive|결정적인, 단호한|adj|C1|
deck|갑판, 데크|n|B2|
declaration|선언, 공표, 신고서|n|C1|
declare|선언하다, 공표하다|v|B2|
decline|감소, 하락|n|B2|
decline|거절하다, 감소하다|v|B2|
decorate|장식하다, 꾸미다|v|B2|
decoration|장식품, 장식|n|B2|
decrease|감소, 하락|n|B2|
decrease|줄이다, 감소하다|v|B2|
dedicated|헌신적인, 전념하는|adj|C1|
dedication|헌신, 전념, 봉헌|n|C1|
deed|행위, 증서|n|C1|
deem|~로 여기다, 간주하다|v|C1|
deep|깊은|adj|A2|
deep|깊게, 깊숙이|adv|B1|
deeply|깊이, 절실히|adv|B2|
default|채무 불이행, 기본 설정|n|C1|
defeat|패배|n|B2|
defeat|패배시키다, 이기다|v|B2|
defect|결함, 결점|n|C1|
defend|방어하다, 변호하다|v|B2|
defender|수비수, 옹호자|n|B2|
defense|방어, 변호|n|B2|
defensive|방어적인, 방어의|adj|C1|
deficiency|결핍, 부족|n|C1|
deficit|적자, 부족액|n|C1|
define|정의하다, 규정하다|v|B1|
definite|확실한, 분명한|adj|B1|
definitely|분명히, 확실히|adv|A2|
definition|정의, 의미|n|B1|
defy|반항하다, 거역하다, 무시하다|v|C1|
degree|도, 학위, 정도|n|A2|
delay|지연, 연기|n|B2|
delay|지연시키다, 미루다|v|B2|
delegate|대표자, 대리인|n|C1|
delegation|대표단, 위임|n|C1|
delete|삭제하다, 지우다|v|B2|
deliberate|의도적인, 계획적인, 신중한|adj|B2|
deliberately|의도적으로, 고의로|adv|B2|
delicate|섬세한, 미묘한, 취약한|adj|C1|
delicious|맛있는|adj|A1|
delighted|아주 기뻐하는|adj|C1|
deliver|배달하다, (연설 등을) 하다|v|B1|
delivery|배달, 인도, 분만|n|B2|
demand|요구, 수요|n|B2|
demand|요구하다, 필요로 하다|v|B2|
democracy|민주주의, 민주주의 국가|n|B2|
democratic|민주적인, 민주주의의|adj|B2|
demon|악마, 마귀|n|C1|
demonstrate|증명하다, 시연하다, 보여주다|v|B2|
demonstration|시위, 설명, 입증|n|B2|
denial|부인, 거부|n|C1|
denounce|맹비난하다, 고발하다|v|C1|
dense|밀집한, 빽빽한, 짙은|adj|C1|
density|밀도, 농도|n|C1|
dentist|치과의사|n|A2|
deny|부인하다, 거부하다|v|B2|
depart|떠나다, 출발하다|v|B2|
department|부서, 과|n|A2|
departure|출발|n|B1|
depend|의존하다, 달려 있다|v|A2|
dependence|의존, 의존성|n|C1|
dependent|의존적인, 의지하는|adj|B2|
depict|그리다, 묘사하다|v|C1|
deploy|배치하다, 효율적으로 사용하다|v|C1|
deployment|배치, 전개|n|C1|
deposit|보증금, 예금|n|B2|
deposit|예금하다, 두다, 맡기다|v|B2|
depressed|우울한, 의기소침한|adj|B2|
depressing|우울하게 만드는, 암담한|adj|B2|
depression|우울증, 불경기, 불황|n|B2|
deprive|빼앗다, 박탈하다|v|C1|
depth|깊이|n|B2|
deputy|부대표, 대리, 부관|n|C1|
derive|끌어내다, 비롯되다|v|B2|
descend|내려가다, 하강하다, 물려받다|v|C1|
descent|혈통, 하강, 내리막|n|C1|
describe|묘사하다, 설명하다|v|A1|
description|설명, 묘사|n|A1|
desert|사막|n|A2|
desert|버리다, 저버리다|v|B2|
deserve|~을 받을 만하다, 누릴 자격이 있다|v|B2|
design|디자인|n|A1|
design|디자인하다, 설계하다|v|A1|
designate|지정하다, 지명하다|v|C1|
designer|디자이너|n|A2|
desirable|바람직한, 가치 있는|adj|C1|
desire|욕망, 갈망|n|B2|
desire|갈망하다, 바라다|v|B2|
desk|책상|n|A1|
desktop|데스크톱 컴퓨터, 바탕 화면|n|C1|
desperate|절망적인, 필사적인|adj|B2|
desperately|필사적으로, 몹시|adv|B2|
despite|~에도 불구하고|prep|B1|
dessert|디저트, 후식|n|A2|
destination|목적지, 행선지|n|B1|
destroy|파괴하다, 망치다|v|A2|
destruction|파괴, 파멸|n|B2|
destructive|파괴적인|adj|C1|
detail|세부 사항|n|A1|
detail|상세히 설명하다, 열거하다|v|B2|
detailed|상세한, 세부적인|adj|B2|
detain|구금하다, 붙들다, 지체시키다|v|C1|
detect|발견하다, 감지하다|v|B2|
detection|감지, 발견, 탐지|n|C1|
detective|탐정, 형사|n|A2|
detention|구금, 유치, 방과 후 남기|n|C1|
deteriorate|악화되다, 저하되다|v|C1|
determination|결심, 투지|n|B2|
determine|결정하다, 알아내다|v|B1|
determined|단호한, 결심이 확고한|adj|B1|
devastate|완전히 파괴하다, 엄청난 충격을 주다|v|C1|
devastating|대단히 파괴적인, 엄청난 충격을 주는|adj|C1|
develop|개발하다, 발전하다|v|A2|
development|발전, 개발, 전개|n|B1|
device|장치, 기기|n|A2|
devil|악마, 악마 같은 사람|n|C1|
devise|고안하다, 창안하다|v|C1|
devote|바치다, 헌신하다|v|B2|
diabetes|당뇨병|n|B2|
diagnose|진단하다, 원인을 규명하다|v|C1|
diagnosis|진단|n|C1|
diagram|도표, 다이어그램|n|B1|
dialogue|대화|n|A1|
diamond|다이아몬드, 마름모|n|B1|
diary|일기|n|A2|
dictate|지시하다, 명령하다, 좌우하다|v|C1|
dictionary|사전|n|A1|
die|죽다|v|A1|
diet|식단, 다이어트|n|A1|
differ|다르다, 일치하지 않다|v|B2|
difference|차이, 차이점|n|A1|
different|다른, 차이가 나는|adj|A1|
differentiate|구별하다, 차별화하다|v|C1|
differently|다르게|adv|A2|
difficult|어려운, 힘든|adj|A1|
difficulty|어려움, 곤경|n|B1|
dig|파다, 발굴하다|v|B2|
digital|디지털의|adj|A2|
dignity|존엄성, 위엄|n|C1|
dilemma|딜레마, 진퇴양난|n|C1|
dime|10센트 동전|n|B2|
dimension|치수, 차원, 관점|n|C1|
diminish|줄어들다, 약화시키다|v|C1|
dinner|저녁 식사|n|A1|
dip|살짝 담그다, 떨어지다|v|C1|
diplomat|외교관|n|C1|
diplomatic|외교의, 외교적인, 수완이 있는|adj|C1|
direct|직접적인, 직행의|adj|A2|
direct|직접, 직행으로|adv|B1|
direct|지휘하다, 총괄하다, 길을 안내하다|v|B1|
direction|방향, 길 안내, 지시|n|A2|
directly|직접, 곧바로|adv|B1|
director|감독, 이사, 부서장|n|A2|
dirt|먼지, 흙|n|B1|
dirty|더러운|adj|A1|
disability|장애|n|B2|
disabled|장애를 가진, 장애가 있는|adj|B2|
disadvantage|불리한 점, 약점|n|B1|
disagree|동의하지 않다, 의견이 다르다|v|A2|
disagreement|의견 충돌, 불일치|n|B2|
disappear|사라지다|v|A2|
disappoint|실망시키다|v|B2|
disappointed|실망한|adj|B1|
disappointing|실망스러운|adj|B1|
disappointment|실망, 낙담|n|B2|
disaster|재난, 참사|n|A2|
disastrous|처참한, 파멸적인, 재앙의|adj|C1|
discard|버리다, 폐기하다|v|C1|
discharge|석방하다, 방출하다, 이행하다|v|C1|
discipline|규율, 절제력, 훈육|n|B2|
disclose|폭로하다, 드러내다|v|C1|
disclosure|폭로, 공개|n|C1|
discount|할인|n|B1|
discount|할인하다, 무시하다|v|B2|
discourage|낙담시키다, 단념시키다|v|B2|
discourse|담론, 담화|n|C1|
discover|발견하다, 알아내다|v|A2|
discovery|발견|n|A2|
discretion|재량권, 신중함|n|C1|
discrimination|차별, 식별|n|C1|
discuss|논의하다, 상의하다|v|A1|
discussion|토론, 논의|n|A2|
disease|질병, 질환|n|A2|
dish|요리, 접시|n|A1|
dishonest|부정직한|adj|B2|
dislike|반감, 싫어함|n|B1|
dislike|싫어하다|v|B1|
dismiss|일축하다, 해고하다|v|B2|
dismissal|해고, 기각, 일축|n|C1|
disorder|무질서, 장애, 질환|n|B2|
displace|대체하다, 쫓아내다, 이전시키다|v|C1|
display|전시, 진열, 표출|n|B2|
display|전시하다, 보여주다|v|B2|
disposal|처리, 처분, 배치|n|C1|
dispose|배치하다, 처리하다, 처분하다|v|C1|
dispute|분쟁, 논쟁|n|C1|
dispute|이의를 제기하다, 분쟁하다|v|C1|
disrupt|방해하다, 혼란에 빠뜨리다|v|C1|
disruption|중단, 혼란, 붕괴|n|C1|
dissolve|녹이다, 용해하다, 해산하다|v|C1|
distance|거리, 간격|n|A2|
distant|먼, 원격의, 서먹한|adj|B2|
distinct|뚜렷한, 분명히 다른|adj|B2|
distinction|구별, 대조, 탁월함|n|C1|
distinctive|독특한, 특색 있는|adj|C1|
distinguish|구별하다, 분간하다|v|B2|
distract|주의를 딴 데로 돌리다, 산만하게 하다|v|B2|
distress|고통, 조난, 비탄|n|C1|
distress|괴롭히다, 고통을 주다|v|C1|
distribute|배포하다, 유통하다|v|B2|
distribution|분배, 유통, 배포|n|B2|
district|구역, 지구|n|B1|
disturb|방해하다, 불안하게 만들다|v|B2|
disturbing|불안감을 주는, 방해하는|adj|C1|
dive|다이빙, 잠수|n|B2|
dive|다이빙하다, 잠수하다|v|B2|
diverse|다양한|adj|B2|
diversity|다양성, 포용성|n|B2|
divert|방향을 바꾸다, 주의를 돌리다|v|C1|
divide|분할, 나눔|n|B2|
divide|나누다, 쪼개다|v|B1|
dividend|배당금|n|C1|
division|분할, 부서, 나눗셈|n|B2|
divorce|이혼|n|B2|
divorce|이혼하다|v|B2|
divorced|이혼한|adj|A2|
do|하다 (의문·부정·강조 조동사)|aux. v|A1|
do|하다|v|A1|
doctor|의사|n|A1|
doctrine|교리, 신조, 원칙|n|C1|
document|문서, 서류|n|A2|
document|기록하다, 문서로 입증하다|v|B2|
documentation|문서화, 서류 기록|n|C1|
dog|개|n|A1|
dollar|달러|n|A1|
domain|영역, 분야, 도메인|n|C1|
domestic|국내의, 가정의|adj|B2|
dominance|지배, 우세|n|C1|
dominant|지배적인, 우세한|adj|B2|
dominate|지배하다, 우위를 점하다|v|B2|
donate|기부하다, 기증하다|v|B1|
donation|기부, 기부금|n|B2|
donor|기증자, 기부자|n|C1|
door|문|n|A1|
dose|복용량, 1회분|n|C1|
dot|점, 도트|n|B2|
double|두 배의, 2인용의|adj|A2|
double|두 배로|adv|B1|
double|두 배의, 두 곱의|det|A2|
double|두 배|pron|A2|
double|두 배가 되다, 두 배로 만들다|v|A2|
doubt|의심, 불확실|n|B1|
doubt|의심하다, 확신하지 못하다|v|B1|
down|아래로, 아래에|adv|A1|
down|~을 따라 아래로|prep|A1|
download|다운로드, 내려받기|n|A2|
download|다운로드하다, 내려받다|v|A2|
downstairs|아래층의|adj|A2|
downstairs|아래층으로, 아래층에|adv|A1|
downtown|도심의, 시내의|adj|A2|
downtown|도심으로, 시내에서|adv|A2|
downtown|도심, 시내|n|A2|
downward|하향의, 아래로 향하는|adj|B2|
downward|아래쪽으로, 하향하여|adv|B2|
dozen|다스, 12개짜리 한 묶음|det|B2|
dozen|다스, 12개짜리 한 묶음|n|B2|
draft|초안, 원고, 선발|n|B2|
draft|초안을 작성하다, 선발하다|v|B2|
drag|끌다, 끌고 가다|v|B2|
drain|배수하다, 서서히 빠져나가다|v|C1|
drama|드라마, 연극|n|A2|
dramatic|극적인, 인상적인|adj|B2|
dramatically|극적으로, 급격히|adv|B2|
draw|그리다, 끌어당기다|v|A1|
drawing|그림, 데생|n|A2|
dream|꿈|n|A2|
dream|꿈을 꾸다|v|A2|
dress|드레스, 원피스|n|A1|
dress|옷을 입다, 입히다|v|A1|
dressed|옷을 입은|adj|B1|
drift|표류하다, 떠돌다|v|C1|
drink|음료, 마실 것|n|A1|
drink|마시다|v|A1|
drive|운전, 드라이브|n|A2|
drive|운전하다|v|A1|
driver|운전기사, 운전자|n|A1|
driving|추진하는, 원동력이 되는|adj|C1|
driving|운전|n|A2|
drone|드론, 무인기|n|C1|
drop|방울, 하락|n|B1|
drop|떨어뜨리다, 떨어지다|v|A2|
drought|가뭄|n|B2|
drown|익사하다, 익사시키다, 삼키다|v|C1|
drug|약, 약물|n|A2|
drum|드럼, 북|n|B1|
drunk|술에 취한|adj|B1|
dry|건조한, 마른|adj|A2|
dry|말리다, 마르다|v|A2|
dual|이중의, 둘의|adj|C1|
dub|별명을 붙이다, 더빙하다|v|C1|
due|~할 예정인, ~ 때문인|adj|B1|
dull|지루한, 칙칙한, 둔한|adj|B2|
dump|버리다, 처분하다|v|B2|
duo|듀오, 2인조|n|C1|
duration|지속 기간|n|B2|
during|~ 동안에|prep|A1|
dust|먼지|n|B1|
duty|의무, 직무, 관세|n|B1|
dynamic|역동적인, 활발한|adj|B2|
dynamic|역학, 원동력|n|C1|
e-commerce|전자 상거래|n|C1|
each|각각, 각자|adv|A1|
each|각각의, 각자의|det|A1|
each|각각, 각자|pron|A1|
eager|열망하는, 간절히 바라는|adj|B2|
ear|귀|n|A1|
early|이른, 초기의|adj|A1|
early|일찍|adv|A1|
earn|벌다, 얻다|v|A2|
earnings|수익, 소득|n|C1|
earth|지구, 땅|n|A2|
earthquake|지진|n|B1|
ease|편안함, 수월함|n|C1|
ease|완화하다, 덜어주다|v|C1|
easily|쉽게, 수월하게|adv|A2|
east|동쪽의|adj|A1|
east|동쪽으로|adv|A1|
east|동쪽|n|A1|
eastern|동쪽의, 동부의|adj|B1|
easy|쉬운|adj|A1|
eat|먹다|v|A1|
echo|메아리, 울림, 반향|n|C1|
echo|메아리치다, 그대로 따라 하다|v|C1|
ecological|생태계의, 생태학의|adj|C1|
economic|경제의, 경제적인|adj|B1|
economics|경제학|n|B2|
economist|경제학자|n|B2|
economy|경제, 절약|n|B1|
ecosystem|생태계|n|B2|
edge|가장자리, 끝, 우위|n|B1|
edit|편집하다, 교정하다|v|B2|
edition|판, 호|n|B2|
editor|편집자, 수정 프로그램|n|B1|
editorial|편집의, 편집자의|adj|B2|
educate|교육하다, 가르치다|v|B1|
educated|교육을 받은, 교양 있는|adj|B1|
education|교육|n|A2|
educational|교육적인, 교육의|adj|B1|
educator|교육자|n|C1|
effect|영향, 효과, 결과|n|A2|
effective|효과적인, 실효성 있는|adj|B1|
effectively|효과적으로, 실질적으로|adv|B1|
effectiveness|효과성, 유효성|n|C1|
efficiency|효율성, 능률|n|C1|
efficient|효율적인, 유능한|adj|B2|
efficiently|효율적으로|adv|B2|
effort|노력, 수고|n|B1|
egg|달걀, 계란|n|A1|
ego|자아, 자부심|n|C1|
eight|8, 여덟|num|A1|
eighteen|18, 열여덟|num|A1|
eighty|80, 여든|num|A1|
either|(부정문에서) 또한, 역시|adv|A2|
either|(둘 중) 어느 하나의|det|A2|
either|(둘 중) 어느 하나|pron|A2|
elaborate|정교한, 공들인|adj|C1|
elbow|팔꿈치|n|B2|
elderly|연로한, 어르신의|adj|B2|
elect|선출하다, 뽑다|v|B2|
election|선거|n|B1|
electoral|선거의, 유권자의|adj|C1|
electric|전기의|adj|A2|
electrical|전기의, 전기관련의|adj|A2|
electricity|전기|n|A2|
electronic|전자의|adj|A2|
electronics|전자 제품, 전자 공학|n|B2|
elegant|우아한, 품격 있는|adj|B2|
element|요소, 성분|n|B1|
elementary|기초의, 초등의|adj|B2|
elephant|코끼리|n|A1|
elevate|높이다, 격상시키다, 승진시키다|v|C1|
elevator|엘리베이터, 승강기|n|A2|
eleven|11, 열하나|num|A1|
eligible|자격이 있는, 적격의|adj|C1|
eliminate|제거하다, 없애다|v|B2|
elite|엘리트, 기득권층|n|C1|
else|그 밖의, 다른|adv|A1|
elsewhere|다른 곳에서, 다른 곳으로|adv|B2|
email|이메일|n|A1|
email|이메일을 보내다|v|A1|
embark|승선하다, 착수하다|v|C1|
embarrassed|당황스러운, 쑥스러운|adj|B1|
embarrassing|당혹스러운, 난처한|adj|B1|
embarrassment|당혹감, 수치심|n|C1|
embassy|대사관|n|C1|
embed|깊숙이 박다, 내장하다|v|C1|
embody|구현하다, 구체화하다|v|C1|
embrace|포용하다, 껴안다|v|B2|
emerge|부상하다, 드러나다|v|B2|
emergence|출현, 발생|n|C1|
emergency|비상사태, 응급 상황|n|B1|
emission|배출, 배출물|n|B2|
emotion|감정, 정서|n|B1|
emotional|감정적인, 정서적인|adj|B2|
emphasis|강조, 역점|n|B2|
emphasize|강조하다, 역점을 두다|v|B2|
empire|제국|n|B2|
employ|고용하다|v|A2|
employee|직원, 피고용인|n|A2|
employer|고용주, 고용자|n|A2|
employment|고용, 일자리|n|B1|
empower|권한을 주다, 자율권을 주다|v|C1|
empty|비어 있는|adj|A2|
empty|비우다|v|B1|
enable|가능하게 하다, 할 수 있게 하다|v|B2|
enact|제정하다, 상연하다|v|C1|
encompass|포함하다, 아우르다|v|C1|
encounter|만남, 접촉|n|B2|
encounter|우연히 마주치다, 겪다|v|B2|
encourage|격려하다, 용기를 북돋우다|v|B1|
encouragement|격려, 고무|n|C1|
encouraging|고무적인, 힘을 북돋우는|adj|C1|
end|끝, 결말|n|A1|
end|끝나다, 끝내다|v|A1|
endeavor|노력, 시도|n|C1|
ending|결말, 끝|n|A2|
endless|끝없는, 무한한|adj|C1|
endorse|지지하다, 보증하다, 배서하다|v|C1|
endorsement|지지, 보증, 배서|n|C1|
endure|견디다, 참다|v|C1|
enemy|적, 원수|n|B1|
energy|에너지, 활기|n|A2|
enforce|집행하다, 시행하다, 강요하다|v|C1|
enforcement|집행, 시행, 강제|n|C1|
engage|참여시키다, 끌어들이다, 사로잡다|v|B2|
engaged|약혼한, 몰두한|adj|B1|
engagement|참여, 약속, 교전|n|C1|
engaging|매력적인, 흥미를 끄는|adj|C1|
engine|엔진|n|A2|
engineer|엔지니어, 기사|n|A2|
engineering|공학, 엔지니어링|n|B1|
enhance|향상시키다, 높이다|v|B2|
enjoy|즐기다|v|A1|
enjoyable|즐거운, 기분 좋은|adj|B2|
enormous|거대한, 막대한|adj|A2|
enough|충분히|adv|A1|
enough|충분한|det|A1|
enough|충분한 양|pron|A1|
enrich|풍요롭게 하다, 질을 높이다|v|C1|
enroll|등록하다, 입학시키다|v|C1|
ensue|뒤따르다, 잇달아 일어나다|v|C1|
ensure|보장하다, 확실하게 하다|v|B2|
enter|들어가다, 입력하다|v|A2|
enterprise|기업, 사업|n|C1|
entertain|즐겁게 해주다, 대접하다|v|B1|
entertaining|재미있는, 즐거움을 주는|adj|B2|
entertainment|오락, 엔터테인먼트|n|B1|
enthusiasm|열정, 열의|n|B2|
enthusiast|열정적인 사람, 애호가|n|C1|
enthusiastic|열정적인, 열렬한|adj|B2|
entire|전체의, 완전한|adj|B2|
entirely|전적으로, 완전히|adv|B2|
entitle|자격을 주다, 권리를 부여하다|v|C1|
entity|독립체, 개체|n|C1|
entrance|입구, 입장|n|B1|
entrepreneur|기업가, 창업가|n|B2|
entry|진입, 참가, 출품작|n|B1|
envelope|봉투|n|B2|
environment|환경|n|A2|
environmental|환경의, 환경과 관련된|adj|B1|
epidemic|유행병, 급격한 확산|n|C1|
episode|에피소드, 한 편|n|B1|
equal|동등한, 같은|adj|B1|
equal|동등한 것, 동등한 사람|n|B2|
equal|동등하다, 같다|v|B1|
equality|평등, 균등|n|C1|
equally|동등하게, 똑같이|adv|B1|
equation|방정식, 등식, 문제|n|C1|
equip|장비를 갖추다, 채비하다|v|B2|
equipment|장비, 용품|n|A2|
equity|공평, 공정, 자기자본|n|C1|
equivalent|동등한, 상당하는|adj|B2|
equivalent|동등한 것, 상응하는 것|n|B2|
era|시대, 연대|n|B2|
erect|세우다, 건립하다|v|C1|
error|오류, 실수|n|A2|
erupt|분출하다, 폭발하다|v|B2|
escalate|고조되다, 단계적으로 확대하다|v|C1|
escape|탈출, 도피|n|B1|
escape|탈출하다, 벗어나다|v|B1|
especially|특히, 특별히|adv|A2|
essay|에세이, 과제물|n|A2|
essence|본질, 정수|n|C1|
essential|필수적인, 극히 중요한|adj|B1|
essentially|본질적으로, 근본적으로|adv|B2|
establish|설립하다, 확립하다|v|B2|
establishment|기득권층, 설립, 시설|n|C1|
estate|토지, 사유지, 재산|n|B2|
estimate|추정치, 견적서|n|B2|
estimate|추정하다, 견적을 내다|v|B2|
ethic|윤리, 도덕|n|B2|
ethical|윤리적인, 도덕적인|adj|B2|
ethnic|민족의, 종족의|adj|B2|
euro|유로 (화폐 단위)|n|A1|
evacuate|대피시키다, 철수시키다|v|C1|
evaluate|평가하다|v|B2|
evaluation|평가|n|B2|
even|평평한, 짝수의, 균등한|adj|B2|
even|~조차도, 훨씬|adv|A1|
evening|저녁|n|A1|
event|행사, 사건|n|A1|
eventually|결국, 마침내|adv|B1|
ever|언제든, 여태껏|adv|A1|
every|모든, 매~|det|A1|
everybody|모든 사람, 모두|pron|A1|
everyday|일상의, 매일의|adj|A2|
everyone|모든 사람, 모두|pron|A1|
everything|모든 것|pron|A1|
everywhere|모든 곳에, 어디나|adv|A2|
evidence|증거|n|A2|
evident|분명한, 명백한|adj|B2|
evil|사악한, 악마 같은|adj|B2|
evil|악, 악행|n|B2|
evoke|떠올려주다, 환기하다|v|C1|
evolution|진화, 발전|n|B2|
evolutionary|진화의, 발전의|adj|C1|
evolve|진화하다, 발전하다|v|B2|
exact|정확한|adj|A2|
exactly|정확히, 꼭|adv|A2|
exaggerate|과장하다|v|C1|
exam|시험|n|A1|
examination|시험, 검사, 조사|n|B2|
examine|조사하다, 검사하다|v|B1|
example|예, 본보기|n|A1|
exceed|초과하다, 넘어서다|v|B2|
excellence|탁월함, 우수함|n|C1|
excellent|우수한, 훌륭한|adj|A2|
except|~을 제외하고는|conj|B1|
except|~을 제외하고|prep|A2|
exception|예외|n|B2|
exceptional|예외적인, 특출한, 뛰어난|adj|C1|
excess|초과한, 여분의|adj|C1|
excess|초과, 과도함, 여분|n|C1|
excessive|과도한, 지나친|adj|B2|
exchange|교환, 환전|n|B1|
exchange|교환하다, 주고받다|v|B1|
excited|신난, 흥분한|adj|A1|
excitement|흥분, 신남|n|B1|
exciting|흥미진진한, 신나는|adj|A1|
exclude|제외하다, 배제하다|v|B2|
exclusion|배제, 제외|n|C1|
exclusive|독점적인, 배타적인, 고급의|adj|C1|
exclusively|독점적으로, 오로지|adv|C1|
excuse|변명, 핑계|n|B2|
excuse|용서하다, 변명하다|v|B2|
execute|실행하다, 처형하다|v|C1|
execution|실행, 처형, 집행|n|C1|
executive|경영의, 간부의, 집행의|adj|B2|
executive|임원, 경영진|n|B2|
exercise|운동|n|A1|
exercise|운동하다|v|A1|
exhibit|전시품, 전람|n|B2|
exhibit|전시하다, 드러내다|v|B2|
exhibition|전시회, 박람회|n|B1|
exile|망명, 망명자, 추방|n|C1|
exist|존재하다|v|A2|
existence|존재, 실재|n|B2|
exit|출구, 나감|n|B1|
exit|나가다, 퇴장하다|v|B2|
exotic|이국적인, 외국의|adj|B2|
expand|확장하다, 팽창시키다|v|B1|
expansion|확장, 확대|n|B2|
expect|기대하다, 예상하다|v|A2|
expectation|기대, 예상|n|B2|
expected|예상되는, 기대되는|adj|B1|
expedition|탐험, 원정, 탐험대|n|B2|
expenditure|지출, 경비|n|C1|
expense|비용, 경비|n|B2|
expensive|비싼|adj|A1|
experience|경험|n|A2|
experience|경험하다, 겪다|v|B1|
experienced|경험이 풍부한, 숙련된|adj|B1|
experiment|실험|n|A2|
experiment|실험하다|v|B1|
experimental|실험적인, 시험적인|adj|C1|
expert|전문적인, 숙련된|adj|A2|
expert|전문가|n|A2|
expertise|전문 지식, 전문성|n|B2|
expire|만료되다, 끝나다|v|C1|
explain|설명하다|v|A1|
explanation|설명|n|A2|
explicit|명백한, 노골적인|adj|C1|
explode|폭발하다, 터지다|v|B1|
exploit|이용하다, 착취하다|v|B2|
exploitation|착취, 개발, 활용|n|C1|
exploration|탐사, 탐구|n|B2|
explore|탐험하다, 탐구하다|v|B1|
explosion|폭발, 파열|n|B1|
explosive|폭발성의, 폭발하기 쉬운, 격발하는|adj|C1|
explosive|폭약, 폭발물|n|C1|
export|수출, 수출품|n|B1|
export|수출하다|v|B1|
expose|노출시키다, 폭로하다|v|B2|
exposure|노출, 폭로|n|B2|
express|표현하다, 나타내다|v|A2|
expression|표현, 표정|n|A2|
extend|연장하다, 확장하다|v|B2|
extension|연장, 내선 번호|n|B2|
extensive|광범위한, 대규모의|adj|B2|
extent|정도, 범위|n|B2|
external|외부의, 대외적인|adj|B2|
extra|추가의, 여분의|adj|A1|
extra|추가로, 특별히|adv|B1|
extra|추가물, 여분|n|B1|
extract|추출물, 발췌|n|B2|
extract|추출하다, 발췌하다|v|C1|
extraordinary|기이한, 비범한, 놀라운|adj|B2|
extreme|극단적인, 극심한|adj|A2|
extreme|극단, 극도|n|B2|
extremely|극도로, 매우|adv|A2|
extremist|극단주의자|n|C1|
eye|눈|n|A1|
fabric|직물, 천, 구조|n|B2|
fabulous|엄청난, 멋진|adj|B2|
face|얼굴|n|A1|
face|직면하다, 마주보다|v|B1|
facilitate|촉진하다, 용이하게 하다|v|C1|
facility|시설, 편의|n|B2|
fact|사실|n|A1|
faction|파벌, 당파|n|C1|
factor|요인, 요소|n|A2|
factory|공장|n|A2|
faculty|교수진, 학부, 능력|n|B2|
fade|바래다, 서서히 사라지다|v|C1|
fail|실패하다, 떨어지다|v|A2|
failure|실패, 실패작|n|B2|
fair|공평한, 타당한|adj|A2|
fairly|꽤, 상당히|adv|B1|
fairness|공정성, 정당성|n|C1|
faith|신념, 믿음|n|B2|
fake|가짜의, 위조의|adj|B2|
fall|가을|n|A1|
fall|떨어지다, 넘어지다|v|A1|
fame|명성, 명예|n|B2|
familiar|친숙한, 익숙한|adj|B1|
family|가족의|adj|A1|
family|가족|n|A1|
famous|유명한|adj|A1|
fan|팬, 부채, 선풍기|n|A2|
fancy|고급스러운, 화려한|adj|B1|
fantastic|환상적인, 아주 멋진|adj|A1|
fantasy|판타지, 환상|n|B2|
far|먼, 훨씬 더 먼|adj|B1|
far|멀리|adv|A1|
fare|교통 요금, 운임|n|B2|
farm|농장|n|A1|
farm|농사를 짓다|v|A2|
farmer|농부|n|A1|
farming|농업, 농사|n|A2|
fascinating|매혹적인, 아주 흥미로운|adj|B1|
fashion|패션, 유행|n|A2|
fashionable|유행하는, 세련된|adj|B1|
fast|빠른|adj|A1|
fast|빨리|adv|A1|
fasten|매다, 고정하다|v|B1|
fat|뚱뚱한, 살찐|adj|A1|
fat|지방|n|A2|
fatal|치명적인, 파멸적인|adj|C1|
fate|운명, 숙명|n|C1|
father|아버지|n|A1|
fault|잘못, 결함|n|B2|
favor|호의, 친절, 부탁|n|B1|
favor|선호하다, 지지하다|v|B2|
favorable|호의적인, 유리한|adj|C1|
favorite|가장 좋아하는|adj|A1|
favorite|가장 좋아하는 사람, 좋아하는 것|n|A1|
fear|두려움, 공포|n|A2|
fear|두려워하다, 무서워하다|v|B1|
feather|깃털|n|B2|
feature|특징, 특색|n|A2|
feature|특징으로 삼다, 특별히 포함하다|v|B1|
February|2월|n|A1|
federal|연방의, 연방 정부의|adj|B1|
fee|수수료, 요금|n|B2|
feed|먹이, 피드|n|B2|
feed|먹이를 주다, 먹이다|v|A2|
feedback|피드백, 의견|n|B2|
feel|느낌, 감촉|n|B2|
feel|느끼다|v|A1|
feeling|느낌, 감정|n|A1|
fellow|동료의, 동류의|adj|B2|
felony|중죄|n|C1|
female|여성의, 암컷의|adj|A2|
female|여성, 암컷|n|A2|
feminist|페미니스트의, 여성주의의|adj|C1|
feminist|페미니스트, 여성주의자|n|C1|
fence|울타리, 담장|n|B1|
festival|축제|n|A1|
fever|열, 고열|n|A2|
few|소수의, 거의 없는|adj|A1|
few|거의 없는, 소수의|det|A1|
few|소수, 거의 없음|pron|A1|
fiber|섬유, 식이섬유|n|C1|
fiction|소설, 허구|n|A2|
field|들판, 밭, 분야|n|A2|
fierce|사나운, 격렬한|adj|C1|
fifteen|15, 열다섯|num|A1|
fifth|다섯 번째|num|A1|
fifty|50, 쉰|num|A1|
fight|싸움, 결투|n|A2|
fight|싸우다, 다투다|v|A2|
fighting|싸움, 교전|n|B1|
figure|숫자, 인물|n|A2|
figure|생각하다, 계산하다|v|B2|
file|서류철, 파일|n|B1|
file|철하다, 제출하다, 소송을 제기하다|v|B2|
fill|채우다|v|A1|
film|영화|n|A2|
film|촬영하다, 영화를 찍다|v|A2|
filmmaker|영화 제작자, 영화감독|n|C1|
filter|여과 장치, 필터|n|C1|
filter|여과하다, 거르다|v|C1|
final|마지막의, 최종적인|adj|A1|
final|결승전, 기말시험|n|A2|
finally|마침내, 드디어|adv|A2|
finance|재정, 금융|n|B2|
finance|자금을 대다, 융통하다|v|B2|
financial|금융의, 재정적인|adj|B1|
find|찾다, 알아내다|v|A1|
finding|조사 결과, 연구 결과|n|B2|
fine|좋은, 괜찮은|adj|A1|
fine|벌금|n|C1|
fine|벌금을 부과하다|v|C1|
finger|손가락|n|A2|
finish|마무리, 결승선|n|A2|
finish|끝내다, 마치다|v|A1|
fire|불, 화재|n|A1|
fire|해고하다, 사격하다|v|A2|
firearm|총기, 화기|n|C1|
firefighter|소방관|n|B2|
firework|불꽃놀이, 폭죽|n|B2|
firm|확고한, 단단한|adj|B2|
firm|회사|n|B2|
firmly|확고하게, 단호히|adv|B2|
first|처음에, 첫째로|adv|A1|
first|첫 번째의|det|A1|
first|처음, 1등|n|A2|
first|첫 번째|num|A1|
fiscal|재정의, 회계의|adj|C1|
fish|물고기, 생선|n|A1|
fish|낚시하다|v|A2|
fishing|낚시|n|A2|
fit|건강한, 몸이 탄탄한|adj|A2|
fit|발작, 적합함, 어울림|n|C1|
fit|맞다, 어울리다|v|A2|
fitness|신체 단련, 건강|n|B1|
five|5, 다섯|num|A1|
fix|해결책, 곤경|n|B2|
fix|고치다, 수리하다|v|A2|
fixed|고정된, 변함없는|adj|B1|
flag|깃발, 국기|n|B1|
flame|불길, 불꽃|n|B2|
flash|섬광, 번쩍임|n|B2|
flash|번쩍이다, 비추다|v|B2|
flat|평평한, 납작한|adj|A2|
flavor|풍미, 맛|n|B2|
flaw|결함, 흠|n|C1|
flawed|결함이 있는, 흠이 있는|adj|C1|
flee|달아나다, 도망치다|v|C1|
fleet|함대, 차량 대수|n|C1|
flexibility|유연성, 융통성|n|C1|
flexible|유연한, 융통성 있는|adj|B2|
flight|비행, 항공편|n|A1|
float|뜨다, 띄우다|v|B2|
flood|홍수|n|B1|
flood|범람하다, 침수시키다|v|B1|
floor|바닥, 층|n|A1|
flour|밀가루|n|B1|
flourish|번창하다, 잘 자라다|v|C1|
flow|흐름, 유동|n|B1|
flow|흐르다|v|B1|
flower|꽃|n|A1|
flu|독감|n|A2|
fluid|유체, 분비액|n|C1|
fly|날다, 비행기로 가다|v|A1|
flying|날아가는, 비행의|adj|A2|
flying|비행|n|A2|
focus|초점, 중심|n|A2|
focus|집중하다, 초점을 맞추다|v|A2|
fold|주름, 접힌 부분|n|B2|
fold|접다, 포개다|v|B1|
folding|접이식의|adj|B2|
folk|민속의, 전통적인|adj|B1|
folk|사람들, 민속|n|B1|
follow|따라가다, 따르다|v|A1|
follow-up|후속의, 뒤이은|adj|C1|
follow-up|후속 조치, 후속편|n|C1|
follower|추종자, 팔로워|n|B2|
following|다음의, 뒤따르는|adj|A2|
following|추종자들, 다음의 것|n|B1|
following|~에 이어, ~ 후에|prep|B2|
fond|애정을 갖는, 좋아하는|adj|B2|
food|음식|n|A1|
fool|바보|n|B2|
foot|발|n|A1|
footage|(특정 사건의) 영상, 장면|n|C1|
football|축구, 미식축구|n|A1|
footprint|발자국|n|B2|
for|~을 위해, ~ 동안|prep|A1|
forbid|금지하다|v|B2|
force|힘, 무력, 군대|n|B1|
force|강요하다, 억지로 ~하게 하다|v|B1|
forecast|예보, 예측|n|B2|
forecast|예보하다, 예측하다|v|B2|
foreign|외국의|adj|A2|
forest|숲, 삼림|n|A2|
forever|영원히|adv|B1|
forge|구축하다, 단조하다, 위조하다|v|C1|
forget|잊다|v|A1|
forgive|용서하다|v|B2|
fork|포크|n|A2|
form|양식, 서식|n|A1|
form|형성하다, 만들다|v|A1|
formal|공식적인, 격식 차린|adj|A2|
format|형식, 서식, 포맷|n|B2|
formation|형성, 대형|n|B2|
former|이전의, 과거의|adj|B2|
formerly|이전에, 예전에는|adv|B2|
formula|공식, 방식|n|C1|
formulate|만들어내다, 명확히 서술하다|v|C1|
forth|앞으로, 밖으로|adv|C1|
forthcoming|다가오는, 곧 나올, 기꺼이 말하는|adj|C1|
fortunate|운 좋은, 다행인|adj|B2|
fortunately|다행히도, 운 좋게도|adv|A2|
fortune|운, 행운, 거액의 재산|n|B2|
forty|40, 마흔|num|A1|
forum|포럼, 토론의 장|n|B2|
forward|앞으로 가는, 전진하는|adj|B2|
forward|앞으로, 앞으로 향하여|adv|A2|
fossil|화석|n|B2|
foster|조성하다, 육성하다, 위탁 양육하다|v|C1|
found|설립하다, 기반을 두다|v|B2|
foundation|재단, 기초, 토대|n|B2|
founder|설립자, 창립자|n|B2|
four|4, 넷|num|A1|
fourteen|14, 열넷|num|A1|
fourth|네 번째|num|A1|
fraction|부분, 일부, 분수|n|B2|
fragile|깨지기 쉬운, 취약한|adj|C1|
fragment|조각, 파편|n|B2|
frame|틀, 액자, 뼈대|n|B1|
frame|틀에 넣다, 액자에 끼우다|v|B1|
framework|틀, 체계, 프레임워크|n|B2|
franchise|가맹 사업, 프랜차이즈, 독점 판매권|n|C1|
frankly|솔직히, 숨김없이|adv|C1|
fraud|사기, 사기꾼|n|B2|
free|무료의, 한가한, 자유로운|adj|A1|
free|무료로, 공짜로|adv|A2|
free|해방하다, 석방하다|v|B2|
freedom|자유|n|B2|
freely|자유롭게, 마음대로|adv|C1|
freeze|얼다, 얼리다|v|B1|
frequency|빈도, 주파수|n|B2|
frequent|빈번한, 잦은|adj|B2|
frequently|자주, 흔히|adv|B1|
fresh|신선한, 새로운|adj|A2|
freshman|신입생, 1학년생|n|C1|
Friday|금요일|n|A1|
friend|친구|n|A1|
friendly|친절한, 다정한|adj|A1|
friendship|우정, 교우 관계|n|B1|
frighten|겁을 주다, 무섭게 하다|v|B1|
frightened|겁먹은, 두려워하는|adj|B1|
frightening|무서운, 두려운|adj|B1|
frog|개구리|n|A2|
from|~로부터, ~에서|prep|A1|
front|앞의, 앞쪽의|adj|A1|
front|앞면, 앞쪽|n|A1|
frozen|냉동된, 얼어붙은|adj|B1|
fruit|과일|n|A1|
frustrated|좌절감을 느끼는, 불만스러워하는|adj|C1|
frustrating|좌절감을 주는, 답답한|adj|C1|
frustration|좌절감, 불만|n|C1|
fry|튀기다, 기름에 볶다|v|B1|
fuel|연료|n|B1|
fuel|연료를 공급하다, 부채질하다|v|B2|
fulfill|완수하다, 이행하다, 충족하다|v|B2|
full|가득 찬, 배부른|adj|A1|
full-time|전임의, 정규직의|adj|B2|
full-time|전일제로, 정규직으로|adv|B2|
fully|완전히, 충분히|adv|B2|
fun|재미있는, 즐거운|adj|A2|
fun|재미, 즐거움|n|A1|
function|기능, 역할|n|B1|
function|기능하다, 작동하다|v|B2|
functional|기능적인, 실용적인|adj|C1|
fund|기금, 자금|n|B2|
fund|자금을 제공하다|v|B2|
fundamental|근본적인, 핵심적인|adj|B2|
funding|재정 지원, 자금 조달|n|B2|
fundraising|모금 활동|n|C1|
funeral|장례식|n|C1|
funny|재미있는, 웃긴|adj|A1|
fur|모피, 털|n|B1|
furious|몹시 화난, 격노한|adj|B2|
furniture|가구|n|A2|
further|더 이상의, 추가적인|adj|A2|
further|더 멀리, 더 나아가|adv|B1|
furthermore|뿐만 아니라, 더욱이|adv|B2|
future|미래의|adj|A2|
future|미래|n|A1|
gain|이익, 증가|n|B2|
gain|얻다, 늘리다|v|B2|
gallery|미술관, 갤러리|n|A2|
gallon|갤런 (부피 단위)|n|B2|
gambling|도박|n|C1|
game|게임, 경기|n|A1|
gaming|게임하기, 게이밍|n|B2|
gang|갱, 무리, 패거리|n|B2|
gap|격차, 틈|n|A2|
garage|차고, 자동차 정비소|n|B1|
garbage|쓰레기|n|A2|
garden|정원|n|A1|
gas|가스, 기체, 휘발유|n|A2|
gate|문, 출입구|n|A2|
gather|모으다, 모이다|v|B1|
gathering|모임, 수집|n|C1|
gay|동성애의, 게이의|adj|B2|
gaze|응시, 시선|n|C1|
gaze|응시하다, 빤히 쳐다보다|v|C1|
gear|장비, 기어, 도구|n|C1|
gender|성별, 성|n|B2|
gene|유전자|n|B2|
general|일반적인, 전반적인|adj|A2|
generally|일반적으로, 대개|adv|B1|
generate|생산하다, 만들어내다|v|B2|
generation|세대, 시대|n|B1|
generic|일반적인, 상표가 없는 (제네릭의)|adj|C1|
generous|관대한, 후한|adj|B1|
genetic|유전적인, 유전학의|adj|B2|
genius|천재, 천재성|n|B2|
genocide|집단학살, 제노사이드|n|C1|
genre|장르, 갈래|n|B2|
gentle|온화한, 부드러운|adj|B1|
genuine|진짜의, 진실한|adj|B2|
genuinely|진심으로, 진정으로|adv|B2|
geography|지리, 지리학|n|A1|
gesture|몸짓, 제스처|n|B2|
get|얻다, 받다, 되다|v|A1|
ghost|유령, 귀신|n|B1|
giant|거대한|adj|B1|
giant|거인|n|B1|
gift|선물, 재능|n|A2|
gig|공연, 단기 일자리|n|C1|
girl|소녀, 여자아이|n|A1|
girlfriend|여자친구|n|A1|
give|주다|v|A1|
glad|기쁜, 고마운|adj|B1|
glance|흘긋 봄|n|C1|
glance|흘긋 보다|v|C1|
glass|유리, 유리잔|n|A1|
glimpse|언뜻 봄, 힐끗 봄|n|C1|
global|세계적인, 지구의|adj|B1|
globalization|세계화|n|B2|
globe|지구, 구체, 세계|n|B2|
glorious|영광스러운, 눈부시게 아름다운|adj|C1|
glory|영광, 영예|n|C1|
glove|장갑|n|B1|
go|시도, 차례|n|B1|
go|가다|v|A1|
goal|목표, 골|n|A2|
god|신, 하느님|n|A2|
gold|금빛의, 금으로 만든|adj|A2|
gold|금|n|A2|
golden|금빛의, 절호의, 황금의|adj|B2|
golf|골프|n|A2|
good|좋은|adj|A1|
good|선, 좋은 것|n|A2|
goodbye|안녕히 가세요, 잘 가|exclam|A1|
goodbye|작별 인사|n|A1|
goodness|선함, 선량함|n|B2|
goods|상품, 물품|n|B2|
gorgeous|아주 멋진, 아름다운|adj|B2|
govern|통치하다, 지배하다|v|B2|
governance|통치, 지배, 거버넌스|n|C1|
government|정부|n|A2|
governor|주지사, 총독|n|B2|
grab|붙잡다, 움켜쥐다|v|B2|
grace|우아함, 은혜|n|C1|
grade|성적, 학년, 등급|n|B1|
grade|등급을 매기다, 채점하다|v|B2|
gradually|서서히, 점차|adv|B2|
graduate|대학 졸업자|n|B1|
graduate|졸업하다|v|B1|
grain|곡물, 낱알|n|B1|
grand|웅장한, 원대한|adj|B2|
grandfather|할아버지|n|A1|
grandmother|할머니|n|A1|
grandparent|조부모|n|A1|
grant|보조금, 장학금|n|B2|
grant|승인하다, 부여하다|v|B2|
graphic|생생한, 그래픽의|adj|B2|
graphics|그래픽, 시각 자료|n|B2|
grasp|완전히 이해하다, 움켜잡다|v|C1|
grass|풀, 잔디|n|A2|
grateful|감사하는, 고마워하는|adj|B1|
grave|무덤, 묘|n|C1|
grave|중대한, 심각한, 엄숙한|adj|C1|
gravity|중력, 심각성, 중대성|n|C1|
gray|회색의|adj|A1|
gray|회색|n|A1|
great|아주 좋은, 대단한|adj|A1|
greatly|크게, 대단히|adv|B2|
green|초록색의|adj|A1|
green|초록색|n|A1|
greenhouse|온실|n|B2|
greet|인사하다, 맞이하다|v|A2|
grid|격자, 전력망|n|C1|
grief|비탄, 큰 슬픔|n|C1|
grind|갈다, 빻다|v|C1|
grip|잡음, 통제력, 장악|n|C1|
grip|꽉 쥐다, 사로잡다|v|C1|
grocery|식료품점, 식료품|n|A2|
gross|총체의, 심각한, 중대한|adj|C1|
ground|땅, 지면, 운동장|n|A2|
group|그룹, 집단|n|A1|
grow|자라다, 키우다|v|A1|
growth|성장, 발전|n|B1|
guarantee|보증, 보증서|n|B2|
guarantee|보증하다, 보약하다|v|B2|
guard|경비원, 경호원, 보호 장치|n|B1|
guard|지키다, 보호하다|v|B1|
guess|추측|n|A1|
guess|추측하다, 맞히다|v|A1|
guest|손님, 하객|n|A2|
guidance|지도, 안내, 지침|n|C1|
guide|안내인, 가이드, 안내서|n|A2|
guide|안내하다, 이끌다|v|A2|
guideline|지침, 가이드라인|n|B2|
guilt|죄책감, 유죄|n|C1|
guilty|죄책감이 드는, 유죄의|adj|B1|
guitar|기타|n|A1|
gun|총|n|A2|
gut|직감, 소화관, 내장|n|C1|
guy|남자, 녀석|n|A2|
gym|체육관|n|A1|
habit|습관, 버릇|n|A2|
habitat|서식지|n|B2|
hack|해킹, 요령, 묘책|n|C1|
hack|난도질하다, 해킹하다|v|C1|
hail|환호하며 맞이하다, 칭송하다|v|C1|
hair|머리카락, 털|n|A1|
half|절반쯤, 반은|adv|A2|
half|절반의|det|A1|
half|절반, 반|n|A1|
half|절반, 반|pron|A1|
halfway|중간에, 불완전하게|adv|C1|
hall|홀, 복도, 현관|n|A2|
halt|정지, 중단|n|C1|
halt|멈추다, 중단시키다|v|C1|
hammer|망치, 해머|n|C1|
hammer|망치로 치다, 집요하게 공격하다|v|C1|
hand|손|n|A1|
hand|건네주다, 넘겨주다|v|B1|
handful|한 줌, 소수|n|C1|
handle|손잡이, 핸들|n|B2|
handle|다루다, 취급하다|v|B2|
handling|처리, 다룸|n|C1|
handy|유용한, 편리한, 손재주가 있는|adj|C1|
hang|걸다, 매달다|v|B1|
happen|일어나다, 발생하다|v|A1|
happily|행복하게, 기꺼이|adv|A2|
happiness|행복|n|B1|
happy|행복한, 기쁜|adj|A1|
harassment|괴롭힘, 희롱|n|C1|
harbor|항구, 항만|n|B2|
hard|단단한, 어려운, 힘든|adj|A1|
hard|열심히, 심하게|adv|A1|
hardly|거의 ~않다|adv|B1|
hardware|하드웨어, 철물|n|C1|
harm|피해, 손해|n|B2|
harm|해를 끼치다, 손상시키다|v|B2|
harmful|해로운, 유해한|adj|B2|
harmony|조화, 화음|n|C1|
harsh|가혹한, 냉혹한, 거친|adj|C1|
harvest|수확, 추수|n|C1|
harvest|수확하다, 거두어들이다|v|C1|
hat|모자|n|A1|
hate|증오, 혐오|n|B1|
hate|싫어하다, 몹시 싫어하다|v|A1|
hatred|증오, 혐오|n|C1|
haunt|자주 나타나다, 끊임없이 괴롭히다|v|C1|
have|~했다, ~해 왔다 (완료형 조동사)|aux. v|A2|
have|가지고 있다, 겪다, 먹다|v|A1|
have to|~해야 한다|modal v|A1|
hazard|위험 요소|n|C1|
he|그는, 그가|pron|A1|
head|머리|n|A1|
head|향하다, 이끌다|v|B1|
headache|두통|n|A2|
headline|표제, 헤드라인|n|B1|
headquarters|본사, 본부|n|B2|
heal|치유하다, 낫다|v|B2|
health|건강|n|A1|
healthcare|의료, 보건 의료|n|B2|
healthy|건강한|adj|A1|
hear|듣다, 들리다|v|A1|
hearing|청력, 청문회|n|B2|
heart|심장, 마음|n|A2|
heat|열, 열기|n|A2|
heat|데우다, 가열하다|v|A2|
heating|난방, 가열|n|B1|
heaven|천국, 하늘|n|B2|
heavily|심하게, 몹시|adv|B1|
heavy|무거운|adj|A2|
heel|발꿈치, 굽|n|B2|
height|높이, 키|n|A2|
heighten|고조시키다, 강화하다|v|C1|
helicopter|헬리콥터|n|B1|
hell|지옥|n|B2|
hello|안녕하세요, 여보세요|exclam|A1|
hello|인사, 안녕|n|A1|
helmet|헬멧, 안전모|n|B2|
help|도움|n|A1|
help|돕다|v|A1|
helpful|도움이 되는, 유용한|adj|A2|
hence|그러므로, 따라서|adv|B2|
her|그녀의|det|A1|
her|그녀를, 그녀에게|pron|A1|
herb|허브, 약초|n|B2|
here|여기에, 이곳으로|adv|A1|
heritage|유산, 전통|n|C1|
hero|영웅, 주인공|n|A2|
hers|그녀의 것|pron|A2|
herself|그녀 자신|pron|A2|
hesitate|망설이다, 주저하다|v|B2|
hey|야, 저기, 안녕|exclam|A1|
hi|안녕|exclam|A1|
hidden|숨겨진, 비밀의|adj|B2|
hide|숨다, 숨기다|v|A2|
hierarchy|위계, 서열 체계|n|C1|
high|높은|adj|A1|
high|높이, 높게|adv|A2|
high|최고점, 최고 수준|n|B2|
high-profile|세간의 이목을 끄는, 유명한|adj|C1|
highlight|가장 중요한 부분, 하이라이트|n|B1|
highlight|강조하다, 눈에 띄게 하다|v|B1|
highly|매우, 대단히|adv|B1|
highway|고속도로|n|B1|
hike|하이킹, 도보 여행|n|A2|
hike|하이킹하다, 도보 여행하다|v|A2|
hilarious|아주 유쾌한, 대단히 우스운|adj|B2|
hill|언덕|n|A2|
him|그를, 그에게|pron|A1|
himself|그 자신|pron|A2|
hint|암시, 힌트|n|C1|
hint|암시하다, 넌지시 비치다|v|C1|
hip|골반, 엉덩이|n|B2|
hire|신규 채용, 고용|n|B2|
hire|고용하다, 채용하다|v|B1|
his|그의|det|A1|
his|그의 것|pron|A2|
historian|역사가|n|B2|
historic|역사적으로 중요한|adj|B1|
historical|역사의, 역사적인|adj|B1|
history|역사|n|A1|
hit|히트, 타격|n|A2|
hit|때리다, 부딪치다|v|A2|
hobby|취미|n|A1|
hockey|하키|n|A2|
hold|잡기, 쥐기, 영향력|n|B2|
hold|잡고 있다, 열다, 개최하다|v|A2|
hole|구멍|n|A2|
hollow|속이 빈, 공허한|adj|B2|
holy|성스러운, 신성한|adj|B2|
home|가정의, 집의|adj|A2|
home|집에, 집으로|adv|A1|
home|집, 가정|n|A1|
homeland|조국, 고국|n|C1|
homeless|집이 없는, 노숙의|adj|B2|
homework|숙제|n|A1|
homicide|살인, 살인 사건|n|C1|
honest|정직한, 솔직한|adj|B1|
honesty|정직, 솔직함|n|B2|
honey|꿀, 여보 (애칭)|n|B2|
honor|명예, 영예|n|B2|
honor|예우하다, 기리다|v|B2|
hook|갈고리, 낚싯바늘|n|B2|
hook|갈고리로 걸다, 낚다|v|C1|
hope|희망, 바람|n|A2|
hope|바라다, 희망하다|v|A1|
hopeful|희망에 찬, 긍정적인|adj|C1|
hopefully|바라건대, 부디|adv|B2|
horizon|수평선, 지평선, 시야|n|C1|
horn|뿔, 경적|n|C1|
horrible|끔찍한, 불쾌한|adj|B1|
horror|공포, 두려움|n|B1|
horse|말|n|A1|
hospital|병원|n|A1|
hospitality|환대, 후대|n|C1|
host|주최자, 진행자, 주인|n|B1|
host|주최하다, 진행하다|v|B2|
hostage|인질|n|C1|
hostile|적대적인, 강력히 반대하는|adj|C1|
hot|더운, 뜨거운|adj|A1|
hotel|호텔|n|A1|
hour|시간 (1시간 단위)|n|A1|
house|집, 주택|n|A1|
house|수용하다, 살 집을 주다|v|B2|
household|가정, 가구|n|B2|
housing|주택, 주거|n|B2|
how|어떻게, 얼마나|adv|A1|
however|하지만, 그러나|adv|A1|
however|그러나, 그렇지만|conj|B2|
hub|중심지, 허브|n|C1|
hug|포옹|n|B2|
hug|포옹하다, 껴안다|v|B2|
huge|거대한, 막대한|adj|A2|
human|인간의, 사람의|adj|A2|
human|인간, 사람|n|A2|
humanitarian|인도주의적인, 박애의|adj|C1|
humanity|인류, 인간성, 인도주의|n|C1|
humble|겸손한, 비천한, 소박한|adj|C1|
humor|유머, 해학|n|B2|
humorous|유머러스한, 익살스러운|adj|B2|
hundred|100, 백|num|A1|
hunger|굶주림, 배고픔|n|B2|
hungry|배고픈|adj|A1|
hunt|사냥하다, 찾아다니다|v|B1|
hunting|사냥, 수렵|n|B2|
hurricane|허리케인, 폭풍|n|B1|
hurry|서두름, 급함|n|B1|
hurry|서두르다, 재촉하다|v|B1|
hurt|다친, 상처 입은|adj|A2|
hurt|상처, 고통|n|B2|
hurt|다치게 하다, 아프다|v|A2|
husband|남편|n|A1|
hybrid|혼합의, 복합의, 하이브리드의|adj|C1|
hybrid|혼합물, 하이브리드|n|C1|
hydrogen|수소|n|C1|
hypothesis|가설|n|B2|
I|나는, 내가|pron|A1|
ice|얼음|n|A1|
ice cream|아이스크림|n|A1|
icon|우상, 아이콘|n|B2|
ID|신분증, 신원 확인|n|B2|
idea|생각, 아이디어|n|A1|
ideal|이상적인|adj|A2|
ideal|이상, 이상적인 것|n|B2|
identical|동일한, 똑같은|adj|B2|
identification|신원 확인, 식별, 동일시|n|C1|
identify|확인하다, 알아보다|v|A2|
identity|정체성, 신원|n|B1|
ideology|이데올로기, 이념|n|C1|
if|만약 ~라면|conj|A1|
ignorance|무지, 무식|n|C1|
ignore|무시하다, 못 본 척하다|v|B1|
ill|아픈, 병든|adj|A2|
illegal|불법적인|adj|B1|
illness|질병, 병|n|A2|
illusion|착각, 환상|n|B2|
illustrate|설명하다, 삽화를 넣다|v|B2|
illustration|삽화, 실례|n|B2|
image|이미지, 모습|n|A2|
imagery|화상, 이미지, 심상|n|C1|
imaginary|상상의, 가상의|adj|B1|
imagination|상상력|n|B2|
imagine|상상하다|v|A1|
immediate|즉각적인, 당면한|adj|B1|
immediately|즉시, 곧바로|adv|A2|
immense|엄청난, 막대한|adj|C1|
immigrant|이민자, 이주민|n|B1|
immigration|이민, 이주|n|B2|
imminent|임박한, 목전의|adj|C1|
immune|면역이 있는, 영향을 받지 않는|adj|B2|
immunity|면역력, 면책|n|C1|
impact|영향, 충격|n|B1|
impact|영향을 주다, 충격을 주다|v|B1|
impatient|참을성 없는, 조바심 내는|adj|B2|
implement|실행하다, 이행하다|v|B2|
implementation|실행, 이행|n|C1|
implication|함축, 영향, 시사점|n|B2|
imply|암시하다, 넌지시 나타내다|v|B2|
import|수입, 수입품|n|B1|
import|수입하다|v|B1|
importance|중요성|n|B1|
important|중요한|adj|A1|
impose|부과하다, 강요하다|v|B2|
impossible|불가능한|adj|A2|
impress|깊은 인상을 주다, 감명시키다|v|B2|
impressed|감명받은, 깊은 인상을 받은|adj|B2|
impression|인상, 감명|n|B1|
impressive|인상적인, 감명 깊은|adj|B1|
improve|개선하다, 나아지다|v|A1|
improvement|개선, 향상|n|B1|
in|안에, 안으로|adv|A1|
in|~ 안에, ~에서|prep|A1|
inability|무능력, 할 수 없음|n|C1|
inadequate|부적절한, 불충분한|adj|C1|
inappropriate|부적절한, 알맞지 않은|adj|C1|
incarcerate|투옥하다, 감금하다|v|C1|
incarceration|투옥, 감금|n|C1|
incentive|장려책, 인센티브|n|B2|
inch|인치 (길이 단위)|n|B2|
incidence|발생률, 발생 범위|n|C1|
incident|사건, 일|n|B2|
inclined|~하는 경향이 있는, ~하고 싶어 하는|adj|C1|
include|포함하다|v|A1|
included|포함된|adj|A2|
including|~을 포함하여|prep|A2|
inclusion|포용, 포함|n|C1|
inclusive|포용적인, 폭넓은, 다 포함하는|adj|C1|
incorporate|포함하다, 통합하다|v|B2|
incorrect|부정확한, 틀린|adj|B2|
increase|증가, 인상|n|A2|
increase|증가하다, 늘다|v|A2|
increasingly|점점 더, 갈수록|adv|B2|
incredible|믿을 수 없는, 놀라운|adj|A2|
incredibly|믿을 수 없을 정도로, 몹시|adv|B1|
incur|발생시키다, 초래하다|v|C1|
indeed|정말로, 참으로|adv|B1|
independence|독립, 자립|n|B2|
independent|독립적인, 자립적인|adj|A2|
index|지수, 지표, 색인|n|B2|
indicate|나타내다, 가리키다|v|B1|
indication|징후, 표시|n|B2|
indicator|지표, 지침|n|C1|
indictment|기소, 고발|n|C1|
indigenous|토착의, 고유한|adj|C1|
indirect|간접적인|adj|B1|
individual|개인의, 개별의|adj|A2|
individual|개인|n|A2|
indoor|실내의|adj|B1|
indoors|실내에서|adv|B1|
induce|유도하다, 설득하다|v|C1|
indulge|마음껏 즐기다, 응석을 받아주다|v|C1|
industrial|산업의, 공업의|adj|B2|
industry|산업, 공업|n|A2|
inequality|불평등, 불균형|n|C1|
inevitable|불가피한, 피할 수 없는|adj|B2|
inevitably|불가피하게, 필연적으로|adv|B2|
infamous|악명 높은|adj|C1|
infant|유아, 젖먹이|n|C1|
infect|감염시키다, 오염시키다|v|C1|
infection|감염, 전염병|n|B2|
infectious|전염성의, 쉽게 번지는|adj|C1|
infer|추론하다, 뜻을 알아내다|v|B2|
inflation|인플레이션, 물가 상승|n|B2|
inflict|가하다, 괴롭히다|v|C1|
influence|영향, 영향력|n|B1|
influence|영향을 미치다|v|B1|
influential|영향력 있는, 영향력이 큰|adj|C1|
info|정보 (구어)|n|B2|
inform|알리다, 통지하다|v|B2|
informal|비공식적인, 격식 없는|adj|A2|
information|정보|n|A1|
infrastructure|사회 기반 시설, 인프라|n|B2|
ingredient|재료, 성분|n|B1|
inhabitant|주민, 서식 동물|n|B2|
inherent|고유의, 내재된|adj|C1|
inherit|상속받다, 물려받다|v|B2|
inhibit|억제하다, 저해하다|v|C1|
initial|초기의, 처음의|adj|B2|
initially|처음에, 초기에는|adv|B2|
initiate|시작하다, 착수시키다|v|C1|
initiative|계획, 주도권, 진취성|n|B2|
inject|주입하다, 주사하다|v|C1|
injection|주사, 주입|n|C1|
injure|다치게 하다, 부상을 입히다|v|B1|
injured|다친, 부상당한|adj|B1|
injury|부상, 상처|n|A2|
injustice|불의, 부당함|n|C1|
ink|먹물, 잉크|n|B2|
inmate|수감자, 입원 환자|n|C1|
inner|내부의, 내면의|adj|B2|
innocent|무죄의, 결백한|adj|B1|
innovation|혁신, 쇄신|n|B2|
innovative|혁신적인|adj|B2|
input|투입, 조언, 입력|n|B2|
inquire|묻다, 문의하다|v|C1|
inquiry|문의, 조사|n|B2|
insect|곤충, 벌레|n|A2|
insert|끼워 넣다, 삽입하다|v|B2|
inside|안쪽의, 내부의|adj|A2|
inside|안에, 안쪽으로|adv|A2|
inside|안쪽, 내부|n|A2|
inside|~의 안에, ~의 내부에|prep|A2|
insider|내부자|n|C1|
insight|통찰, 통찰력|n|B2|
insist|주장하다, 고집하다|v|B2|
inspect|점검하다, 시찰하다|v|C1|
inspection|점검, 사찰, 검사|n|C1|
inspector|검사관, 조사관|n|B2|
inspiration|영감, 감화|n|C1|
inspire|영감을 주다, 고무하다|v|B2|
install|설치하다, 장착하다|v|B2|
installation|설치, 설비|n|B2|
instance|사례, 경우|n|B2|
instant|즉각적인, 인스턴트의|adj|B2|
instantly|즉각, 당장|adv|B2|
instead|대신에|adv|A2|
instead of|~ 대신에|prep|A2|
institute|연구소, 협회|n|B2|
institution|기관, 제도|n|B2|
institutional|제도의, 기관의, 관례적인|adj|C1|
instruct|지시하다, 가르치다|v|C1|
instruction|설명, 지시|n|A2|
instructor|강사, 지도자|n|A2|
instrument|악기, 도구|n|A2|
instrumental|중요한 역할을 하는, 결정적인|adj|C1|
insufficient|불충분한, 미흡한|adj|C1|
insult|모욕, 모욕적인 말|n|C1|
insult|모욕하다, 욕보이다|v|C1|
insurance|보험, 보험료|n|B2|
intact|온전한, 훼손되지 않은|adj|C1|
intake|섭취량, 유입량|n|C1|
integral|필수적인, 완전한|adj|C1|
integrate|통합하다, 융합하다|v|B2|
integrated|통합된, 융합된|adj|C1|
integration|통합, 융합|n|C1|
integrity|진실성, 온전함|n|C1|
intellectual|지적인, 지식인의|adj|B2|
intellectual|지식인|n|C1|
intelligence|지능, 기밀 정보|n|B1|
intelligent|지능이 높은, 똑똑한|adj|A2|
intend|의도하다, 작정하다|v|B1|
intended|의도된, 계획된|adj|B2|
intense|극심한, 강렬한|adj|B2|
intensify|강화하다, 심화되다|v|C1|
intensity|강도, 세기, 맹렬함|n|C1|
intensive|집중적인, 철저한|adj|C1|
intent|의도, 목적|n|C1|
intention|의도, 목적|n|B1|
interact|상호작용하다, 교류하다|v|B2|
interaction|상호 작용|n|B2|
interactive|상호작용하는, 쌍방향의|adj|C1|
interest|관심, 흥미|n|A1|
interest|관심을 끌다|v|A1|
interested|관심 있는, 흥미 있어 하는|adj|A1|
interesting|재미있는, 흥미로운|adj|A1|
interface|인터페이스, 접속기|n|C1|
interfere|간섭하다, 방해하다|v|C1|
interference|간섭, 개입, 방해|n|C1|
interim|중간의, 임시의|adj|C1|
interior|내부의, 안쪽의|adj|C1|
interior|내부, 내륙|n|C1|
internal|내부의, 국내의|adj|B2|
international|국제의, 국제적인|adj|A2|
internet|인터넷|n|A1|
interpret|해석하다, 통역하다|v|B2|
interpretation|해석, 설명|n|B2|
interrupt|방해하다, 중단시키다|v|B2|
intersection|교차로, 교차 지점|n|C1|
interval|간격, 중간 휴식 시간|n|B2|
intervene|개입하다, 중재하다|v|C1|
intervention|개입, 중재|n|C1|
interview|면접, 인터뷰|n|A1|
interview|인터뷰하다, 면접을 보다|v|A1|
intimate|친밀한, 사적인, 깊숙한|adj|C1|
into|~ 안으로|prep|A1|
intriguing|아주 흥미로운, 호기심을 돋우는|adj|C1|
introduce|소개하다|v|A1|
introduction|소개, 도입|n|A2|
invade|침략하다, 침입하다|v|B2|
invasion|침략, 침입|n|B2|
invent|발명하다|v|A2|
invention|발명품, 발명|n|A2|
inventory|재고, 물품 목록|n|C1|
invest|투자하다|v|B1|
investigate|수사하다, 조사하다|v|B1|
investigation|수사, 조사|n|B2|
investigator|조사관, 수사관|n|C1|
investment|투자, 투자금|n|B2|
investor|투자자|n|B2|
invisible|보이지 않는, 눈에 띄지 않는|adj|C1|
invitation|초대, 초대장|n|A2|
invite|초대하다|v|A2|
invoke|적용하다, 들먹이다, 간청하다|v|C1|
involve|수반하다, 포함하다|v|A2|
involved|관련된, 참여하는|adj|B1|
involvement|관여, 개입, 연루|n|C1|
iron|철, 쇠, 다리미|n|B1|
iron|다림질하다|v|B1|
ironically|반어적으로, 짓궂게도|adv|C1|
irony|반어법, 아이러니|n|C1|
irrelevant|무관한, 무의미한|adj|C1|
island|섬|n|A1|
isolate|격리하다, 고립시키다|v|B2|
isolated|고립된, 외딴|adj|B2|
isolation|고립, 격리|n|C1|
issue|문제, 쟁점, 발행 호|n|B1|
issue|발행하다, 발급하다|v|B2|
IT|정보기술, IT|n|B1|
it|그것은, 그것을|pron|A1|
item|물품, 항목|n|A2|
its|그것의|det|A1|
itself|그것 자체|pron|A2|
jacket|재킷, 상의|n|A1|
jail|교도소, 감옥|n|B2|
jail|투옥하다, 수감하다|v|B2|
jam|잼|n|A2|
January|1월|n|A1|
jazz|재즈|n|A2|
jeans|청바지|n|A1|
jet|제트기, 분출|n|B2|
jewelry|보석, 장신구|n|A2|
job|일, 직업|n|A1|
join|참여하다, 가입하다|v|A1|
joint|공동의, 합동의|adj|C1|
joint|관절, 연결 부위|n|C1|
joke|농담|n|A2|
joke|농담하다|v|A2|
journal|일기, 잡지, 학술지|n|B1|
journalism|저널리즘, 언론 활동|n|B2|
journalist|기자, 언론인|n|A2|
journey|여행, 여정|n|B1|
joy|기쁨, 환희|n|B2|
judge|판사, 심사위원|n|B1|
judge|판단하다, 심사하다|v|B1|
judgment|판단, 판결, 판단력|n|B2|
judicial|사법의, 재판의|adj|C1|
juice|주스|n|A1|
July|7월|n|A1|
jump|점프, 뛰기|n|A2|
jump|뛰다, 뛰어오르다|v|A2|
June|6월|n|A1|
junior|하급의, 부하의, 후배의|adj|B2|
jurisdiction|관할권, 사법권|n|C1|
jury|배심원단|n|B2|
just|공정한, 정당한|adj|C1|
just|그저, 단지, 방금|adv|A1|
justice|정의, 사법|n|B2|
justification|정당화, 정당한 이유|n|C1|
justify|정당화하다, 이유를 대다|v|B2|
keen|날카로운, 예민한, 열심인|adj|C1|
keep|유지하다, 보관하다|v|A1|
key|핵심적인, 대단히 중요한|adj|A1|
key|열쇠|n|A1|
key|입력하다, 건반을 누르다|v|B1|
keyboard|키보드, 자판, 건반|n|B1|
kick|발차기, 킥|n|B1|
kick|차다, 걷어차다|v|B1|
kid|아이|n|A2|
kidnap|납치하다, 유괴하다|v|C1|
kidney|신장, 콩팥|n|C1|
kill|죽이다|v|A2|
killing|살인, 살해|n|B1|
kilometer|킬로미터|n|A2|
kind|친절한, 다정한|adj|B1|
kind|종류, 유형|n|A1|
kindergarten|유치원|n|B2|
king|왕, 국왕|n|A2|
kingdom|왕국, 영역|n|C1|
kiss|키스, 입맞춤|n|B1|
kiss|키스하다, 입맞추다|v|B1|
kit|도구 세트, 키트|n|B2|
kitchen|부엌, 주방|n|A1|
knee|무릎|n|A2|
knife|칼|n|A2|
knock|노크 소리, 두드림|n|B1|
knock|두드리다, 노크하다|v|A2|
know|알다, 알고 있다|v|A1|
knowledge|지식|n|A2|
lab|실험실, 연구실|n|A2|
label|라벨, 표|n|B1|
label|라벨을 붙이다, 꼬리표를 달다|v|B1|
labor|노동, 근로|n|B2|
laboratory|실험실, 연구실|n|B1|
lack|부족, 결핍|n|B1|
lack|부족하다, 결핍되다|v|B1|
ladder|사다리|n|B2|
lady|여성, 숙녀|n|A2|
lake|호수|n|A2|
lamp|램프, 전등|n|A2|
land|땅, 육지|n|A1|
land|착륙하다, 내려앉다|v|A2|
landing|착륙, 상륙|n|B2|
landlord|임대인, 집주인|n|C1|
landmark|주요 지형지물, 획기적인 사건|n|C1|
landscape|풍경, 경관|n|B2|
lane|차선, 좁은 길|n|B2|
language|언어|n|A1|
lap|무릎, (트랙의) 한 바퀴|n|C1|
laptop|노트북 컴퓨터|n|A2|
large|큰, 규모가 큰|adj|A1|
large-scale|대규모의|adj|C1|
largely|주로, 대체로|adv|B2|
laser|레이저|n|C1|
last|마지막으로|adv|A2|
last|마지막의|det|A1|
last|마지막 사람, 마지막 것|n|A2|
last|지속되다, 오래가다|v|A2|
late|늦은|adj|A1|
late|늦게|adv|A1|
lately|최근에, 요즈음|adv|B2|
later|더 나중의, 더 늦은|adj|A2|
later|나중에, 뒤에|adv|A1|
latest|최신의, 가장 최근의|adj|B1|
latest|최신 뉴스, 최신 것|n|B2|
latter|후자의, 후반의|adj|C1|
latter|후자|n|C1|
laugh|웃음, 웃음소리|n|A1|
laugh|웃다|v|A1|
laughter|웃음, 웃음소리|n|A2|
launch|출시, 발사, 개시|n|B2|
launch|시작하다, 출시하다, 발사하다|v|B2|
law|법, 법률|n|A2|
lawmaker|입법자, 국회의원|n|C1|
lawn|잔디밭|n|C1|
lawsuit|소송|n|C1|
lawyer|변호사|n|A2|
lay|놓다, 두다, 눕히다|v|B1|
layer|층, 겹|n|B1|
layout|배치, 레이아웃|n|C1|
lazy|게으른|adj|A2|
lead|선두, 우세, 납|n|B1|
lead|이끌다, 안내하다|v|A2|
leader|지도자, 리더|n|A2|
leadership|리더십, 지도력|n|B2|
leading|주도하는, 선두의|adj|B1|
leaf|나뭇잎, 잎|n|B1|
league|리그, 연맹|n|B2|
leak|누출, 유출|n|C1|
leak|새다, 누설하다|v|C1|
lean|기울이다, 기대다|v|B2|
leap|도약, 급증|n|C1|
leap|뛰어오르다, 급증하다|v|C1|
learn|배우다|v|A1|
learning|학습, 배움|n|A2|
least|가장 적게, 최소한|adv|A2|
least|가장 적은, 최소의|det|A2|
least|가장 적은 것, 최소한|pron|A2|
leather|가죽|n|B1|
leave|휴가, 허가|n|B2|
leave|떠나다, 남겨두다|v|A1|
lecture|강의, 강연|n|A2|
lecture|강의하다|v|A2|
left|왼쪽의|adj|A1|
left|왼쪽으로|adv|A1|
left|왼쪽|n|A1|
leg|다리|n|A1|
legacy|유산, 물려받은 것|n|C1|
legal|법적인, 합법적인|adj|B1|
legend|전설, 신화|n|B2|
legendary|전설적인, 유명한|adj|C1|
legislation|법률, 제정법|n|C1|
legislative|입법의, 입법부의|adj|C1|
legislature|입법부, 의회|n|C1|
legitimate|정당한, 합법적인, 타당한|adj|C1|
leisure|여가, 자유 시간|n|B1|
lemon|레몬|n|A2|
lend|빌려주다|v|A2|
length|길이, 기간|n|B1|
lengthy|너무 긴, 장황한|adj|C1|
lens|렌즈|n|B2|
lesbian|레즈비언의, 여성 동성애자의|adj|C1|
less|덜, 더 적게|adv|A2|
less|더 적은, 덜한|det|A2|
less|더 적은 것|pron|A2|
lesser|더 작은, 덜 중요한|adj|C1|
lesson|수업, 교훈|n|A1|
let|~하게 두다, 허락하다|v|A1|
lethal|치명적인, 파멸을 부르는|adj|C1|
letter|편지, 글자|n|A1|
level|평평한, 수평의|adj|B1|
level|수준, 높이|n|A2|
level|평평하게 만들다, 대등하게 하다|v|B2|
levy|부과금, 세금|n|C1|
levy|부과하다, 징수하다|v|C1|
liable|책임이 있는, ~하기 쉬운|adj|C1|
liberal|자유주의의, 진보적인, 개방적인|adj|C1|
liberal|자유주의자, 진보주의자|n|C1|
library|도서관|n|A1|
license|면허, 자격증|n|B2|
lie|눕다, 놓여 있다|v|A1|
lie|거짓말|n|B1|
lie|거짓말하다|v|B1|
life|삶, 인생|n|A1|
lifelong|평생의|adj|C1|
lifestyle|생활 방식, 라이프스타일|n|A2|
lifetime|평생, 일생|n|B2|
lift|들어 올리다|v|A2|
light|밝은|adj|A1|
light|빛, 불빛|n|A1|
light|불을 켜다, 밝히다|v|A2|
light|가벼운|adj|A2|
lighting|조명|n|B2|
like|좋아함, 선호|n|B1|
like|좋아하다|v|A1|
like|~와 같은, ~처럼|prep|A1|
likelihood|가능성, 가망|n|C1|
likely|~할 가능성이 높은|adj|A2|
likewise|마찬가지로, 비슷하게|adv|B2|
limb|사지, 팔다리, 큰 가지|n|C1|
limit|한계, 제한|n|B1|
limit|제한하다, 한정하다|v|B1|
limitation|한계, 제약|n|B2|
limited|제한된, 한정된|adj|B2|
line|줄, 선|n|A1|
line|줄지어 서다, 안감을 대다|v|B2|
linear|직선의, 선형의|adj|C1|
lineup|선수 명단, 라인업|n|C1|
linger|남아 있다, 서성거리다|v|C1|
link|링크, 연결|n|A2|
link|연결하다, 관련짓다|v|A2|
lion|사자|n|A1|
lip|입술|n|B1|
liquid|액체의|adj|B1|
liquid|액체|n|B1|
list|목록, 명단|n|A1|
list|목록을 만들다, 열거하다|v|A1|
listen|듣다, 귀 기울이다|v|A1|
listener|청취자, 듣는 사람|n|A2|
listing|상장, 명단 등록|n|C1|
liter|리터 (부피 단위)|n|C1|
literacy|문해력, 읽고 쓰는 능력|n|C1|
literally|말 그대로, 문자 그대로|adv|B2|
literary|문학의, 문학적인|adj|B2|
literature|문학|n|B1|
litter|쓰레기|n|B2|
little|작은, 어린|adj|A1|
little|조금, 약간|adv|A2|
little|거의 없는, 약간의|det|A1|
little|소량, 거의 없음|pron|A1|
live|생방송의, 살아 있는|adj|B1|
live|생방송으로, 라이브로|adv|B1|
live|살다, 거주하다|v|A1|
lively|활기찬, 생생한|adj|B2|
liver|간|n|C1|
living|살아 있는, 현존하는|adj|B1|
living|생활비, 생계|n|B1|
load|짐, 적재량, 부담|n|B2|
load|싣다, 장전하다|v|B2|
loan|대출, 대여|n|B2|
lobby|로비, 로비 단체|n|C1|
lobby|로비하다, 진정하다|v|C1|
local|지역의, 현지의|adj|A1|
local|현지인, 주민|n|B1|
locate|위치를 찾아내다, 위치시키다|v|B1|
located|위치한, 자리 잡고 있는|adj|B1|
location|위치, 장소|n|B1|
lock|자물쇠|n|A2|
lock|잠그다|v|A2|
logic|논리, 이성|n|C1|
logical|논리적인, 타당한|adj|B2|
logo|로고, 상징 마크|n|B2|
lonely|외로운, 쓸쓸한|adj|B1|
long|긴, 오랜|adj|A1|
long|오래, 오랫동안|adv|A1|
long-standing|오래된, 수년 간 지속된|adj|C1|
long-term|장기적인|adj|B2|
long-term|장기적으로|adv|B2|
longtime|오랜, 오랜 기간에 걸친|adj|C1|
look|외모, 눈길|n|A2|
look|보다, 바라보다|v|A1|
loom|어렴풋이 나타나다, 곧 닥칠 듯 보이다|v|C1|
loop|고리, 루프|n|C1|
loose|느슨한, 헐렁한|adj|B2|
lord|영주, 주님|n|B2|
lose|잃어버리다, 지다|v|A1|
loss|손실, 분실, 상실|n|B1|
lost|길을 잃은, 잃어버린|adj|A2|
lot|많이|adv|A1|
lot|많은|det|A1|
lot|많은 것, 많은 사람|pron|A1|
lottery|복권, 추첨|n|B2|
loud|시끄러운, 소리가 큰|adj|A2|
loud|크게, 시끄럽게|adv|A2|
loudly|크게, 시끄러운 소리로|adv|A2|
love|사랑|n|A1|
love|사랑하다|v|A1|
low|낮은|adj|A2|
low|낮게, 낮은 소리로|adv|A2|
low|최저점, 바닥|n|B2|
lower|낮추다, 떨어뜨리다|v|B2|
loyal|충실한, 충성스러운|adj|B2|
loyalty|충성심, 충성|n|C1|
luck|운, 행운|n|A2|
lucky|운이 좋은|adj|A2|
lunch|점심 식사|n|A1|
lung|폐, 허파|n|B2|
luxury|사치, 고급품|n|B1|
lyric|가사, 노랫말|n|B2|
machine|기계|n|A1|
machinery|기계류, 조직 체계|n|C1|
mad|미친, 몹시 화난|adj|B1|
magazine|잡지|n|A1|
magic|마법의, 마술의|adj|B1|
magic|마술, 마법|n|B1|
magical|마법의, 매력적인|adj|C1|
magnetic|자기의, 자석 같은, 매력적인|adj|C1|
magnificent|웅장한, 대단히 훌륭한|adj|C1|
magnitude|규모, 크기, 진도|n|C1|
mail|우편물, 메일|n|A2|
mail|우편으로 보내다, 메일을 보내다|v|A2|
main|주요한, 주된|adj|A1|
mainland|본토, 대륙|n|C1|
mainly|주로, 대부분은|adv|B1|
mainstream|주류의, 대세의|adj|C1|
mainstream|주류, 대세|n|C1|
maintain|유지하다, 주장하다|v|B2|
maintenance|유지, 보수, 지속|n|C1|
major|주요한, 중대한|adj|A2|
major|전공자, 소령|n|B2|
majority|다수, 대다수|n|B2|
make|종류, 브랜드|n|B2|
make|만들다, 하다|v|A1|
makeup|화장, 구성, 성격|n|B2|
making|제작, 형성|n|B2|
male|남성의, 수컷의|adj|A2|
male|남성, 수컷|n|A2|
mall|쇼핑몰|n|A1|
man|남자, 성인 남성|n|A1|
manage|관리하다, 해내다|v|A2|
management|관리, 경영, 경영진|n|B1|
manager|관리자, 매니저|n|A2|
mandate|권한, 위임, 명령|n|C1|
mandatory|의무적인, 강제적인|adj|C1|
manifest|명백히 나타내다, 드러내다|v|C1|
manipulate|조종하다, 조작하다|v|C1|
manipulation|조작, 조종|n|C1|
manner|방식, 태도, 예절|n|A2|
manufacture|제조하다, 생산하다|v|B2|
manufacturing|제조업, 제조|n|B2|
many|많은|det|A1|
many|많은 사람, 많은 것|pron|A1|
map|지도|n|A1|
map|지도를 그리다, 배치하다|v|B2|
marathon|마라톤|n|B2|
March|3월|n|A1|
march|행진, 가두 행진|n|C1|
march|행진하다, 단호하게 걸어가다|v|C1|
margin|여백, 여유, 차이|n|B2|
marginal|미미한, 변두리의, 소외된|adj|C1|
marine|해양의, 바다의|adj|C1|
mark|자국, 점수, 표시|n|A2|
mark|표시하다, 채점하다|v|A2|
marker|표시용 펜, 표식|n|B2|
market|시장|n|A1|
market|내놓다, 마케팅하다|v|B1|
marketing|마케팅, 영업 활동|n|B1|
marketplace|시장, 장터|n|C1|
marriage|결혼, 결혼 생활|n|B1|
married|결혼한|adj|A1|
marry|결혼하다|v|A2|
mask|가면, 마스크|n|C1|
mass|대량의, 대규모의, 대중의|adj|B2|
mass|대중, 덩어리, 질량|n|B2|
massacre|대학살|n|C1|
massive|거대한, 막대한|adj|B2|
master|달인, 거장, 석사|n|B2|
master|숙달하다, 정복하다|v|B2|
match|경기, 시합|n|A1|
match|어울리다, 맞추다, 일치하다|v|A1|
matching|어울리는, 일치하는|adj|B2|
mate|친구, 짝|n|B2|
mate|짝짓기하다, 짝을 짓다|v|B2|
material|물질적인, 육체적인|adj|B2|
material|재료, 물질, 자료|n|A2|
math|수학|n|A2|
mathematical|수학의, 수학적인|adj|C1|
mathematics|수학|n|A2|
matter|문제, 일, 물질|n|A2|
matter|중요하다, 문제가 되다|v|A2|
mature|성숙한, 분별 있는, 원숙한|adj|C1|
mature|성숙하다, 만기가 되다|v|C1|
maximize|극대화하다, 최대한 활용하다|v|C1|
maximum|최대의, 최고한도의|adj|B2|
maximum|최대치, 최고한도|n|B2|
may|~일지도 모른다, ~해도 좋다|modal v|A2|
May|5월|n|A1|
maybe|아마도|adv|A1|
mayor|시장 (시의 수장)|n|A2|
me|나를, 나에게|pron|A1|
meal|식사, 끼니|n|A1|
mean|의미하다, 뜻하다|v|A1|
meaning|의미, 뜻|n|A1|
meaningful|의미 있는, 뜻깊은|adj|C1|
means|수단, 방법, 재산|n|B2|
meantime|그동안, 중간 시간|n|C1|
meanwhile|그동안에, 한편|adv|B1|
measure|조치, 대책, 치수|n|B1|
measure|측정하다, 재다|v|B1|
measurement|측정, 치수|n|B2|
meat|고기, 육류|n|A1|
mechanic|정비사, 수리공|n|B2|
mechanical|기계의, 기계적인|adj|B2|
mechanism|기계 장치, 메커니즘|n|B2|
medal|메달, 훈장|n|B2|
media|대중 매체, 미디어|n|A2|
medical|의학의, 의료의|adj|A2|
medication|약, 약물 치료|n|B2|
medicine|약, 의학|n|A2|
medieval|중세의|adj|C1|
meditation|명상, 묵상|n|C1|
medium|중간의, 보통의|adj|B1|
medium|매체, 수단|n|B2|
meet|만나다|v|A1|
meeting|회의, 모임|n|A1|
melody|선율, 멜로디|n|C1|
melt|녹다, 녹이다|v|B2|
member|회원, 구성원|n|A1|
membership|회원 자격, 회원 수|n|B2|
memo|메모, 보고서|n|C1|
memoir|회고록, 전기|n|C1|
memorable|기억에 남을 만한, 잊지 못할|adj|B2|
memorial|기념비, 기념물|n|C1|
memory|기억, 기억력, 추억|n|A2|
mental|정신의, 마음의|adj|B1|
mention|언급, 거론|n|B1|
mention|언급하다, 말하다|v|A2|
mentor|멘토, 조언자|n|C1|
menu|메뉴, 차림표|n|A1|
merchant|상인, 무역상|n|C1|
mercy|자비, 은혜|n|C1|
mere|단순한, 겨우 ~에 불과한|adj|C1|
merely|단지, 그저|adv|C1|
merge|합병하다, 융합하다|v|C1|
merger|합병|n|C1|
merit|장점, 가치, 공적|n|C1|
mess|엉망인 상태, 난잡함|n|B1|
message|메시지, 문자|n|A1|
metal|금속|n|A2|
metaphor|은유, 비유|n|B2|
meter|미터 (길이 단위)|n|A1|
method|방법, 방식|n|A2|
methodology|방법론|n|C1|
middle|중간의, 중앙의|adj|A2|
middle|중앙, 한가운데|n|A2|
midnight|자정, 한밤중|n|A1|
midst|한가운데, 중앙|n|C1|
might|~일지도 모른다|modal v|A2|
migrant|이주하는, 이주 노동자의|adj|C1|
migrant|이주자, 이주 노동자|n|C1|
migration|이주, 이동|n|C1|
mild|온화한, 순한|adj|B1|
mile|마일 (거리 단위)|n|A1|
militant|호전적인, 과격한, 투쟁적인|adj|C1|
militant|호전주의자, 과격파|n|C1|
military|군사의, 군대의|adj|B2|
military|군대, 군인들|n|B2|
militia|민병대|n|C1|
milk|우유|n|A1|
mill|방앗간, 제분소, 공장|n|C1|
million|1,000,000, 백만|num|A1|
mind|마음, 정신|n|A2|
mind|상관하다, 꺼리다|v|A2|
mindset|사고방식, 마음가짐|n|C1|
mine|나의 것, 내 것|pron|A2|
mine|광산, 채석장|n|B1|
miner|광부|n|B2|
mineral|광물, 무기물|n|B2|
minimal|최소한의, 극소의|adj|C1|
minimize|최소화하다, 축소하다|v|C1|
minimum|최소의, 최저한도의|adj|B2|
minimum|최소치, 최저한도|n|B2|
mining|광업, 채굴|n|C1|
minister|장관, 성직자|n|B2|
ministry|부처, 부, 목회|n|C1|
minor|사소한, 중요하지 않은|adj|B2|
minority|소수, 소수 집단|n|B2|
minute|극히 작은, 대단히 미세한|adj|C1|
minute|분 (시간 단위)|n|A1|
miracle|기적|n|C1|
mirror|거울|n|A2|
miserable|비참한, 매우 불행한|adj|B2|
misery|비참함, 고통|n|C1|
misleading|오도하는, 속이는, 오해하기 쉬운|adj|C1|
miss|놓치다, 그리워하다|v|A1|
missile|미사일|n|C1|
missing|실종된, 사라진|adj|A2|
mission|임무, 사명|n|B2|
mistake|실수, 잘못|n|A1|
mistake|착각하다, 잘못 생각하다|v|B2|
mitigate|완화하다, 경감시키다|v|C1|
mix|혼합물, 믹스|n|B1|
mix|섞다, 혼합하다|v|B1|
mixed|혼합된, 엇갈린|adj|B2|
mixture|혼합물, 섞인 것|n|B1|
mob|폭도, 군중|n|C1|
mobile|이동식의, 휴대의|adj|A2|
mobile|유동적인|adj|C1|
mobile|휴대전화|n|A2|
mobility|이동성, 기동력|n|C1|
mobilize|동원하다, 결집하다|v|C1|
mode|방식, 모드|n|B2|
model|모델, 모형|n|A1|
model|모형으로 만들다, 모델로 일하다|v|B2|
moderate|보통의, 온건한, 적당한|adj|C1|
modern|현대의, 모던한|adj|A1|
modest|겸손한, 보통의, 크지 않은|adj|B2|
modification|수정, 변경|n|C1|
modify|수정하다, 변경하다|v|B2|
module|모듈, 단위|n|C1|
moment|순간, 잠깐|n|A1|
momentum|탄력, 추진력, 여세|n|C1|
Monday|월요일|n|A1|
money|돈|n|A1|
monitor|모니터, 감시 장치|n|B2|
monitor|감시하다, 관찰하다|v|B2|
monkey|원숭이|n|A2|
monopoly|독점, 전매|n|C1|
monster|괴물, 몬스터|n|B2|
month|달, 월|n|A1|
monthly|매월의, 월간의|adj|B2|
monument|기념물, 기념비|n|B2|
mood|기분, 분위기|n|B1|
moon|달|n|A2|
moral|도덕적인, 도덕의|adj|B2|
moral|교훈, 도덕|n|B2|
more|더, 더 많이|adv|A1|
more|더 많은|det|A1|
more|더 많은 것, 더 많은 사람|pron|A1|
moreover|게다가, 더욱이|adv|B2|
morning|아침, 오전|n|A1|
mortgage|담보 대출, 모기지|n|B2|
mosque|모스크, 이슬람 사원|n|B2|
mosquito|모기|n|B2|
most|가장, 제일|adv|A1|
most|가장 많은, 대부분의|det|A1|
most|가장 많은 것, 대부분|pron|A1|
mostly|대부분, 주로|adv|A2|
mother|어머니|n|A1|
motion|움직임, 동작, 발의|n|B2|
motivate|동기를 부여하다, 자극하다|v|B2|
motivation|동기 부여, 자극|n|B2|
motive|동기, 유인|n|C1|
motor|모터로 움직이는, 자동차의|adj|B2|
motor|모터, 전동기|n|B2|
motorcycle|오토바이|n|A2|
mount|증가하다, 조직하여 시작하다|v|B2|
mountain|산|n|A1|
mouse|쥐, 마우스|n|A1|
mouth|입|n|A1|
move|조치, 행동, 이사|n|B1|
move|움직이다, 이사하다|v|A1|
movement|움직임, 동작, 운동|n|A2|
movie|영화|n|A1|
moving|감동적인|adj|B2|
much|많이, 대단히|adv|A1|
much|많은|det|A1|
much|많은 양|pron|A1|
mud|진흙|n|B1|
multiple|다수의, 복합적인|adj|B2|
multiply|증가하다, 곱하다|v|B2|
municipal|지방 자치제의, 시의|adj|C1|
murder|살인, 살인 사건|n|B1|
murder|살해하다, 살인하다|v|B1|
muscle|근육|n|B1|
museum|박물관|n|A1|
music|음악|n|A1|
musical|음악의|adj|A2|
musical|뮤지컬|n|B1|
musician|음악가|n|A2|
must|~해야 한다, ~임에 틀림없다|modal v|A1|
mutual|상호 간의, 서로의, 공통의|adj|C1|
my|나의, 내|det|A1|
myself|나 자신|pron|A2|
mysterious|신비로운, 불가사의한|adj|B2|
mystery|미스터리, 수수께끼|n|B1|
myth|신화, 근거 없는 통념|n|B2|
nail|손톱, 못|n|B1|
naked|발가벗은, 노출된|adj|B2|
name|이름|n|A1|
name|이름을 짓다, 지명하다|v|A1|
namely|즉, 다시 말해|adv|C1|
narrative|서사의, 이야기체의|adj|B1|
narrative|서사, 이야기|n|B1|
narrow|좁은|adj|A2|
narrow|좁히다, 좁아지다|v|B2|
nasty|못된, 더러운, 불쾌한|adj|B2|
nation|국가, 국민|n|B1|
national|국가의, 국립의|adj|A2|
national|국민, 대표 선수|n|B2|
nationwide|전국적인, 전국 규모의|adj|C1|
native|토착의, 모국의|adj|B1|
native|원주민, 토박이|n|B1|
natural|자연의, 타고난|adj|A1|
naturally|자연스럽게, 당연히|adv|B1|
nature|자연|n|A2|
navigate|항해하다, 길을 찾다|v|B2|
navigation|내비게이션, 항해|n|B2|
near|가까운|adj|A1|
near|가까이|adv|A1|
near|~의 가까이에|prep|A1|
nearby|가까운, 인근의|adj|B2|
nearby|인근에, 가까이에|adv|B2|
nearly|거의|adv|A2|
neat|깔끔한, 단정한|adj|B1|
necessarily|필연적으로, 반드시|adv|B1|
necessary|필요한, 필수적인|adj|A2|
necessity|필요성, 필수품|n|B2|
neck|목|n|A2|
need|~할 필요가 있다|modal v|B1|
need|필요, 요구|n|A2|
need|필요로 하다|v|A1|
needle|바늘, 침|n|B1|
negative|부정적인, 부정의|adj|A1|
negative|부정적인 것, 음화|n|B2|
neglect|소홀히 하다, 방치하다|v|C1|
negotiate|협상하다, 타결하다|v|B2|
negotiation|협상, 교섭|n|B2|
neighbor|이웃|n|A1|
neighborhood|동네, 이웃|n|A1|
neighboring|이웃의, 인접한|adj|C1|
neither|~도 아니다|adv|B1|
neither|(둘 중) 어느 쪽도 ~아닌|det|A2|
neither|(둘 중) 어느 쪽도 (~않다)|pron|A2|
nerve|신경, 담력, 긴장|n|B2|
nervous|초조한, 긴장한|adj|A2|
nest|둥지, 보금자리|n|C1|
net|순(純)~, 에누리 없는|adj|C1|
net|그물, 네트|n|B1|
network|네트워크, 관계망|n|A2|
neutral|중립적인, 중성의|adj|B2|
never|결코 ~않는, 전혀 ~없다|adv|A1|
nevertheless|그럼에도 불구하고|adv|B2|
new|새로운|adj|A1|
newly|새로, 최근에|adv|B2|
news|뉴스, 소식|n|A1|
newsletter|소식지, 뉴스레터|n|C1|
newspaper|신문|n|A1|
next|다음의, 옆의|adj|A1|
next|다음에, 그 옆에|adv|A1|
next|다음 사람, 다음 것|n|B1|
next to|~의 옆에|prep|A1|
nice|좋은, 친절한, 멋진|adj|A1|
niche|틈새, 적소|n|C1|
nickel|5센트 동전, 니켈|n|B2|
night|밤|n|A1|
nightmare|악몽|n|B2|
nine|9, 아홉|num|A1|
nineteen|19, 열아홉|num|A1|
ninety|90, 아흔|num|A1|
no|어떤 ~도 없는|det|A1|
no|아니요|exclam|A1|
no one|아무도 (~않다)|pron|A1|
nobody|아무도 (~않다)|pron|A1|
nod|고개를 끄덕이다|v|C1|
noise|소음, 시끄러운 소리|n|A2|
noisy|시끄러운|adj|A2|
nominate|지명하다, 추천하다|v|C1|
nomination|지명, 추천, 후보 임명|n|C1|
nominee|후보자, 지명된 사람|n|C1|
none|아무도, 아무것도 (~않다)|pron|A2|
nonetheless|그럼에도 불구하고|adv|C1|
nonprofit|비영리의|adj|C1|
nonsense|허튼소리, 말도 안 되는 생각|n|C1|
noon|정오, 낮 12시|n|C1|
nor|~도 아니다|adv|B1|
nor|~도 아니다|conj|B1|
norm|규범, 표준|n|B2|
normal|정상적인, 보통의|adj|A2|
normal|보통, 정상|n|B1|
normally|보통, 정상적으로|adv|A2|
north|북쪽의|adj|A1|
north|북쪽으로|adv|A1|
north|북쪽|n|A1|
northern|북쪽의, 북부의|adj|B1|
nose|코|n|A1|
not|~않다, 아니다|adv|A1|
notable|주목할 만한, 뚜렷한|adj|C1|
notably|특히, 현저히|adv|C1|
note|메모, 짧은 편지|n|A1|
note|주목하다, 적어두다|v|B1|
notebook|노트북 컴퓨터, 공책|n|B2|
nothing|아무것도 (~않다)|pron|A1|
notice|안내문, 공지, 알아챔|n|A2|
notice|알아차리다, 주목하다|v|A2|
notification|통지, 알림|n|C1|
notify|통지하다, 알리다|v|C1|
notion|개념, 생각|n|B2|
notorious|악명 높은|adj|C1|
novel|새로운, 참신한, 독창적인|adj|C1|
novel|소설|n|A2|
novelist|소설가|n|B2|
November|11월|n|A1|
now|지금, 이제|adv|A1|
now|~이므로, 이제 ~이니까|conj|B1|
nowadays|요즘에는, 오늘날에는|adv|B2|
nowhere|아무 데도 (~않다)|adv|A2|
nuclear|원자력의, 핵의|adj|B1|
number|숫자, 번호|n|A1|
number|번호를 매기다|v|A2|
numerous|수많은, 다수의|adj|B2|
nurse|간호사|n|A1|
nursery|탁아소, 어린이집, 묘목장|n|C1|
nursing|간호의, 수유의|adj|B2|
nut|견과류, 너트|n|A2|
nutrition|영양, 영양 섭취|n|B2|
o'clock|~시 정각|adv|A1|
obesity|비만|n|B2|
obey|복종하다, 따르다|v|B2|
object|물건, 물체|n|A1|
object|반대하다, 항의하다|v|B2|
objection|이의, 반대|n|C1|
objective|객관적인|adj|B2|
objective|목표, 목적|n|B2|
obligation|의무, 책임|n|B2|
oblige|의무를 지우다, 강요하다|v|C1|
observation|관찰, 관측|n|B2|
observe|관찰하다, 준수하다|v|B2|
observer|관찰자, 참관인|n|B2|
obsess|사로잡다, 강박감을 갖다|v|C1|
obsession|강박, 집착|n|C1|
obstacle|장애물, 방해물|n|B2|
obtain|얻다, 획득하다|v|B2|
obvious|명백한, 분명한|adj|B1|
obviously|분명히, 명백히|adv|B1|
occasion|특별한 행사, 때, 경우|n|B1|
occasional|때때로의, 가끔의|adj|C1|
occasionally|가끔, 때때로|adv|B2|
occupation|직업, 점령|n|B2|
occupy|차지하다, 점령하다|v|B2|
occur|일어나다, 발생하다|v|B1|
occurrence|발생, 사건|n|C1|
ocean|대양, 바다|n|A1|
October|10월|n|A1|
odd|이상한, 특이한|adj|B1|
odds|확률, 공산, 역경|n|C1|
of|~의, ~에 속한|prep|A1|
off|떨어져, 벗겨져|adv|A1|
off|~에서 떨어져, ~에서 벗어나|prep|A1|
offend|기분 상하게 하다, 위반하다|v|B2|
offender|범죄자, 위반자|n|B2|
offense|위법 행위, 모욕, 공격|n|B2|
offensive|공격적인, 무례한, 모욕적인|adj|B2|
offer|제의, 제안|n|A2|
offer|제안하다, 제공하다|v|A2|
offering|제공물, 헌금, 공물|n|C1|
office|사무실|n|A1|
officer|경관, 장교, 공무원|n|A2|
official|공식적인, 공인의|adj|B1|
official|공무원, 관계자|n|B2|
offset|상쇄하다, 벌충하다|v|C1|
offshore|해안에서 떨어진, 해외의|adj|C1|
often|자주, 흔히|adv|A1|
oh|아, 오|exclam|A1|
oil|기름, 석유|n|A2|
OK|괜찮은|adj|A1|
OK|괜찮게, 잘|adv|A1|
OK|좋아요, 알았어요|exclam|A1|
old|나이 든, 낡은, 오래된|adj|A1|
old-fashioned|구식의, 옛날 방식의|adj|B1|
on|계속해서, 켜져|adv|A1|
on|~ 위에, ~에|prep|A1|
once|한 번|adv|A1|
once|일단 ~하면, ~하자마자|conj|B1|
one|하나의, 한|det|A1|
one|1, 하나|num|A1|
one|사람, 것|pron|A1|
ongoing|진행 중인, 계속되는|adj|B2|
onion|양파|n|A1|
online|온라인의|adj|A1|
online|온라인으로|adv|A1|
only|유일한, 오직 ~뿐인|adj|A1|
only|오직, 단지|adv|A1|
onto|~의 위로|prep|A2|
open|열린, 영업 중인|adj|A1|
open|열다, 시작하다|v|A1|
opening|개막식, 결원, 빈자리|n|B2|
openly|솔직하게, 드러내놓고|adv|B2|
opera|오페라|n|B2|
operate|작동하다, 운영하다, 수술하다|v|B2|
operation|수술, 작동, 운영|n|B1|
operational|운영상의, 가동 가능한|adj|C1|
operator|운영자, 교환원, 조작자|n|B2|
opinion|의견, 생각|n|A1|
opponent|상대, 반대자|n|B2|
opportunity|기회|n|A2|
oppose|반대하다, 겨루다|v|B2|
opposed|반대하는, 대립하는|adj|B2|
opposite|반대편의, 맞은편의|adj|A1|
opposite|맞은편에|adv|A1|
opposite|반대편, 반대되는 사람/것|n|A1|
opposite|~의 맞은편에|prep|A1|
opposition|반대, 대립, 야당|n|B2|
opt|선택하다|v|C1|
optical|시각의, 광학의|adj|C1|
optimism|낙관론, 낙관주의|n|C1|
optimistic|낙관적인, 긍정적인|adj|B2|
option|선택, 선택권|n|A2|
or|또는, 아니면|conj|A1|
oral|구두의, 입의|adj|C1|
orange|주황색의|adj|A1|
orange|오렌지, 주황색|n|A1|
orchestra|오케스트라, 관현악단|n|B2|
order|주문, 순서|n|A1|
order|주문하다, 명령하다|v|A1|
ordinary|평범한, 일상적인|adj|A2|
organ|장기, 기관, 오르간|n|B2|
organic|유기농의, 유기의|adj|B2|
organization|조직, 단체|n|A2|
organizational|조직의, 단체의|adj|C1|
organize|정리하다, 조직하다|v|A2|
organized|조직적인, 정돈된|adj|B1|
organizer|주최자, 정리함|n|B1|
orientation|방향성, 오리엔테이션, 성향|n|C1|
origin|기원, 출신|n|B2|
original|원래의, 독창적인|adj|A2|
original|원작, 원본|n|B1|
originally|원래, 본래|adv|B1|
originate|비롯되다, 유래하다|v|C1|
other|다른|adj|A1|
other|다른 사람, 다른 것|pron|A1|
otherwise|그렇지 않으면, 다른 방식으로는|adv|B2|
ought|~해야 한다, ~하는 것이 마땅하다|modal v|B1|
our|우리의|det|A1|
ours|우리의 것|pron|B1|
ourselves|우리 자신|pron|A2|
out|밖으로, 밖에|adv|A1|
out|~의 밖으로|prep|A1|
outbreak|발발, 발생|n|C1|
outcome|결과, 성과|n|B2|
outdoor|야외의, 실외의|adj|B1|
outdoors|야외에서|adv|B1|
outer|외부의, 외곽의|adj|B2|
outfit|의상, 옷 한 벌|n|B2|
outlet|배출구, 할인 매장, 대리점|n|C1|
outline|개요, 윤곽|n|B2|
outline|개요를 서술하다, 윤곽을 잡다|v|B2|
outlook|전망, 견해|n|C1|
output|생산량, 출력|n|B2|
outrage|격분, 분노|n|C1|
outrage|격분하게 만들다|v|C1|
outside|실외의, 바깥의|adj|A2|
outside|밖에, 야외에서|adv|A1|
outside|바깥, 야외|n|A2|
outside|~의 밖에, ~의 외부에|prep|A2|
outsider|외부인, 국외자|n|C1|
outstanding|뛰어난, 두드러진, 미결제의|adj|B2|
oven|오븐|n|A2|
over|넘어, 건너|adv|A1|
over|~의 위에, ~을 넘어|prep|A1|
overall|전반적인, 전면적인|adj|B2|
overall|전반적으로, 대체로|adv|B2|
overcome|극복하다, 이겨내다|v|B2|
overlook|간과하다, 내려다보다|v|C1|
overly|지나치게, 과도하게|adv|C1|
overnight|하룻밤 사이에, 밤사이에|adv|B2|
overseas|해외의, 외국의|adj|B1|
overseas|해외로, 해외에서|adv|A2|
oversee|감독하다, 총괄하다|v|C1|
overturn|뒤집다, 파기하다|v|C1|
overwhelm|압도하다, 당황하게 하다|v|C1|
overwhelming|압도적인, 저항할 수 없는|adj|C1|
owe|빚지다, 신세를 지고 있다|v|B2|
own|자신의, 직접 만든|adj|A1|
own|자신의 것|pron|A1|
own|소유하다|v|A2|
owner|주인, 소유자|n|A2|
ownership|소유권, 소유|n|B2|
oxygen|산소|n|B2|
pace|속도, 걸음걸이|n|B2|
pace|속도를 맞추다, 서성거리다|v|B2|
pack|묶음, 배낭, 한 팩|n|B1|
pack|(짐을) 싸다, 포장하다|v|A2|
package|소포, 상자, 패키지|n|B1|
package|포장하다, 패키지로 만들다|v|B2|
packet|갑, 작은 묶음|n|B2|
pad|패드, 완충재, 받침|n|C1|
page|페이지, 쪽|n|A1|
pain|통증, 고통|n|A2|
painful|고통스러운, 아픈|adj|B1|
paint|페인트, 물감|n|A1|
paint|페인트칠하다, 그리다|v|A1|
painter|화가, 페인트공|n|A2|
painting|그림, 회화|n|A1|
pair|쌍, 짝, 켤레|n|A1|
palace|궁전|n|A2|
pale|창백한, 옅은|adj|B1|
palm|손바닥, 야자수|n|B2|
pan|냄비, 팬|n|B1|
pandemic|세계적 유행병의, 팬데믹의|adj|B2|
pandemic|세계적 대유행, 팬데믹|n|B2|
panel|전문가단, 패널, 판|n|B2|
panic|공황, 극심한 공포|n|B2|
pants|바지|n|A1|
paper|종이, 신문|n|A1|
parade|퍼레이드, 행진|n|B2|
paragraph|문단, 단락|n|A1|
parallel|평행한, 유사한|adj|B2|
parallel|유사점, 평행선|n|B2|
parameter|매개변수, 기준치|n|C1|
parent|부모, 어버이|n|A1|
parental|부모의, 부모로서의|adj|C1|
park|공원|n|A1|
park|주차하다|v|A1|
parking|주차, 주차장|n|A2|
parliament|의회, 국회|n|C1|
part|부분, 일부|n|A1|
part-time|시간제의, 파트타임의|adj|B2|
part-time|시간제로, 파트타임으로|adv|B2|
partial|부분적인, 편파적인|adj|C1|
partially|부분적으로|adv|C1|
participant|참가자|n|B2|
participate|참여하다, 참가하다|v|B1|
participation|참여, 참가|n|B2|
particular|특정한, 특별한|adj|A2|
particularly|특히, 특별히|adv|B1|
partly|부분적으로, 어느 정도는|adv|B2|
partner|동반자, 짝|n|A1|
partnership|동반자 관계, 제휴|n|B2|
party|파티, 모임|n|A1|
pass|통행증, 출입증, 패스|n|B1|
pass|지나가다, 건네다, 합격하다|v|A2|
passage|구절, 통로, 통과|n|B2|
passenger|승객, 탑승객|n|A2|
passing|통과, 경과, 사망|n|C1|
passion|열정|n|B1|
passionate|열정적인, 열렬한|adj|B2|
passive|수동적인, 소극적인|adj|C1|
passport|여권|n|A1|
password|비밀번호, 암호|n|B2|
past|지난, 과거의|adj|A1|
past|지나서|adv|A2|
past|과거, 지난날|n|A1|
past|~을 지나서|prep|A1|
pastor|목사|n|C1|
patch|헝겊 조각, 부분|n|B2|
patent|특허, 특허권|n|C1|
path|길, 경로|n|B1|
pathway|경로, 통로|n|C1|
patience|인내심, 참을성|n|B2|
patient|참을성 있는, 끈기 있는|adj|B2|
patient|환자|n|A2|
patrol|순찰, 순찰대|n|C1|
patrol|순찰하다|v|C1|
patron|후원자, 단골손님|n|C1|
pattern|패턴, 양식, 무늬|n|A2|
pause|멈춤, 일시 정지|n|B2|
pause|멈추다, 잠시 중단하다|v|B2|
pay|급료, 지불|n|A2|
pay|지불하다, 내다|v|A1|
payment|지불, 납입금|n|B1|
peace|평화|n|A2|
peaceful|평화로운, 잔잔한|adj|B1|
peak|정점, 산봉우리|n|C1|
peer|동료, 또래|n|B2|
pen|펜|n|A1|
penalty|처벌, 불이익, 페널티|n|B2|
pencil|연필|n|A1|
penny|페니 (동전 단위)|n|A2|
pension|연금|n|C1|
people|사람들|n|A1|
pepper|후추, 피망|n|A1|
per|~당, ~마다|prep|A2|
perceive|인지하다, 지각하다|v|B2|
percent|퍼센트의, 백분율의|adj|A2|
percent|퍼센트로|adv|A2|
percent|퍼센트, 백분율|n|A2|
percentage|백분율, 비율|n|B1|
perception|지각, 인식|n|B2|
perfect|완벽한|adj|A1|
perfectly|완벽하게, 아주|adv|B1|
perform|공연하다, 수행하다|v|A2|
performance|공연, 실적, 성과|n|B1|
perhaps|아마도, 어쩌면|adv|A2|
period|기간, 마침표|n|A1|
permanent|영구적인, 영속하는|adj|B2|
permanently|영구적으로, 영원히|adv|B2|
permission|허가, 승낙|n|A2|
permit|허가증|n|B2|
permit|허용하다, 허가하다|v|B2|
persist|지속되다, 고집하다|v|C1|
persistent|끈질긴, 끊임없이 지속되는|adj|C1|
person|사람, 인간|n|A1|
personal|개인적인|adj|A1|
personality|성격, 개성|n|A2|
personally|개인적으로, 직접|adv|B1|
personnel|인원, 직원, 인사과|n|C1|
perspective|관점, 시각, 원근법|n|B2|
persuade|설득하다|v|B1|
pet|애완동물, 반려동물|n|A2|
petition|청원, 탄원서|n|C1|
pharmaceutical|제약의, 제약학의|adj|C1|
pharmaceutical|제약, 제약 제품|n|C1|
pharmacy|약국|n|B2|
phase|단계, 시기|n|B2|
phenomenon|현상|n|B2|
philosopher|철학자|n|C1|
philosophy|철학|n|B2|
phone|전화, 전화기|n|A1|
phone|전화하다|v|A1|
photo|사진|n|A1|
photograph|사진|n|A1|
photograph|사진을 찍다|v|A2|
photographer|사진작가|n|B1|
photography|사진 촬영, 사진술|n|B1|
phrase|어구, 구|n|A1|
physical|신체의, 물리적인|adj|A2|
physician|내과의사, 의사|n|B2|
physics|물리학|n|A2|
piano|피아노|n|A1|
pick|선택, 고른 것|n|B2|
pick|고르다, 뽑다, 꺾다|v|A2|
pickup|픽업트럭, 획득, 개선|n|C1|
picture|사진, 그림|n|A1|
picture|상상하다, 마음에 그리다|v|B2|
piece|조각, 한 개|n|A1|
pig|돼지|n|A1|
pile|더미, 쌓아 올린 것|n|B2|
pile|쌓아 올리다, 포개다|v|B2|
pill|알약|n|B2|
pilot|조종사, 파일럿|n|A2|
pin|핀, 옷핀|n|B1|
pin|핀으로 꽂다, 고정하다|v|B1|
pink|분홍색의|adj|A1|
pink|분홍색|n|A1|
pioneer|개척자, 선구자|n|C1|
pioneer|개척하다, 선도하다|v|C1|
pipe|파이프, 배관|n|B1|
pipeline|수송관, 파이프라인|n|C1|
pirate|해적, 저작권 침해자|n|C1|
pit|구덩이, 함정|n|C1|
pitch|경기장, 피치, 음높이|n|B2|
pity|동정, 유감, 아쉬운 일|n|B2|
pizza|피자|n|A1|
place|장소, 곳|n|A1|
place|놓다, 배치하다|v|B1|
placement|배치, 취업 알선|n|B2|
plain|명백한, 소박한, 무늬가 없는|adj|B2|
plan|계획|n|A1|
plan|계획하다|v|A1|
plane|비행기|n|A1|
planet|행성|n|A2|
planning|계획 수립, 기획|n|B1|
plant|식물, 초목|n|A1|
plant|심다|v|A2|
plastic|플라스틱의|adj|A2|
plastic|플라스틱|n|A2|
plate|접시, 그릇|n|A2|
platform|승강장, 플랫폼|n|A2|
play|연극, 놀이|n|A1|
play|놀다, 경기하다, 연주하다|v|A1|
player|선수, 연주자|n|A1|
plea|간청, 탄원, 항변|n|C1|
plead|애원하다, 변호하다|v|C1|
pleasant|즐거운, 기분 좋은|adj|B1|
please|제발, 부디, 부탁합니다|exclam|A1|
please|기쁘게 하다, 만족시키다|v|A2|
pleased|기뻐하는, 만족해하는|adj|A2|
pleasure|기쁨, 즐거움|n|B1|
pledge|서약, 공약|n|C1|
pledge|서약하다, 약속하다|v|C1|
plenty|풍부함, 충분한 양|pron|B1|
plot|줄거리, 음모|n|B1|
plot|음모를 꾸미다, 줄거리를 구성하다|v|B2|
plug|플러그, 마개|n|C1|
plug|막다, 꽂다|v|C1|
plunge|급락하다, 뛰어들다|v|C1|
plus|좋은, 유리한|adj|B2|
plus|게다가, 또한|conj|B2|
plus|이점, 장점|n|B2|
plus|~을 더하여, ~ 외에도|prep|B1|
pocket|주머니, 포켓|n|A2|
podcast|팟캐스트|n|B1|
poem|시 (한 편)|n|B1|
poet|시인|n|B1|
poetry|시 (장르, 총칭)|n|B1|
point|요점, 점|n|A1|
point|가리키다, 겨누다|v|B1|
pointed|뾰족한, 날카로운|adj|B2|
poison|독, 독극물|n|B1|
poison|독을 묻히다, 오염시키다|v|B1|
poisonous|유독한, 독이 있는|adj|B1|
pole|기둥, 극 (남극/북극)|n|C1|
police|경찰|n|A1|
policy|정책, 방침|n|B1|
polite|공손한, 예의 바른|adj|A2|
political|정치적인, 정당의|adj|B1|
politician|정치인|n|B1|
politics|정치, 정치학|n|B1|
poll|여론 조사, 투표|n|C1|
pollution|오염, 공해|n|A2|
pond|연못|n|C1|
pool|수영장, 웅덩이|n|A1|
poor|가난한, 불쌍한|adj|A1|
pop|대중음악의, 팝의|adj|A2|
pop|대중음악, 팝송|n|A2|
pop|불쑥 나타나다, 펑 터지다|v|C1|
popular|인기 있는|adj|A1|
popularity|인기|n|B2|
population|인구, 주민|n|A2|
port|항구, 항만|n|B1|
portfolio|포트폴리오, 작품집, 자산 구성|n|C1|
portion|부분, 1인분|n|B2|
portrait|초상화, 인물 사진|n|B1|
portray|묘사하다, 그리다|v|C1|
pose|제기하다, 포즈를 취하다|v|B2|
position|위치, 자리, 입장|n|A2|
position|배치하다, 자세를 잡다|v|B2|
positive|긍정적인, 확신하는|adj|A1|
positive|긍정적인 것, 양성 반응|n|B2|
possess|소유하다, 지니다|v|B2|
possession|소유, 소유물|n|A2|
possibility|가능성|n|A2|
possible|가능한|adj|A1|
possibly|아마도, 어쩌면|adv|B1|
post|우편, 기둥|n|A1|
post|게시하다, 우편을 부치다|v|A1|
poster|포스터, 벽보|n|A2|
postpone|연기하다, 미루다|v|C1|
pot|냄비, 솥, 화분|n|B1|
potato|감자|n|A1|
potential|잠재적인, 가능성 있는|adj|B2|
potential|잠재력, 가능성|n|B2|
potentially|잠재적으로, 어쩌면|adv|B2|
pound|파운드 (무게·화폐 단위)|n|A1|
pour|붓다, 따르다|v|B1|
poverty|빈곤, 가난|n|B1|
powder|가루, 파우더|n|B1|
power|힘, 권력, 전력|n|A2|
power|동력을 공급하다, 작동시키다|v|B2|
powerful|강력한, 영향력 있는|adj|B1|
practical|실용적인, 현실적인|adj|B1|
practice|연습, 실행|n|A1|
practice|연습하다|v|A1|
practitioner|전문직 종사자, 개업의|n|C1|
praise|칭찬, 찬사|n|B2|
praise|칭찬하다, 찬양하다|v|B2|
pray|기도하다, 빌다|v|B1|
prayer|기도, 기도문|n|B1|
precede|선행하다, 앞서다|v|B2|
precedent|선례, 판례|n|C1|
precious|귀중한, 값비싼|adj|B2|
precise|정확한, 정밀한|adj|B2|
precisely|정확하게, 딱|adv|B2|
precision|정밀성, 정확도|n|C1|
predator|포식자, 포식 동물|n|C1|
predecessor|전임자, 이전 모델|n|C1|
predict|예측하다, 예견하다|v|A2|
predictable|예측 가능한|adj|B2|
prediction|예측, 예견|n|B1|
predominantly|주로, 압도적으로|adv|C1|
prefer|선호하다, 더 좋아하다|v|A1|
preference|선호, 더 좋아함|n|B2|
pregnancy|임신|n|C1|
pregnant|임신한|adj|B2|
prejudice|편견, 선입견|n|C1|
preliminary|예비의, 사전의|adj|C1|
premise|전제|n|C1|
premium|보험료, 할증금, 프리미엄|n|C1|
preparation|준비, 대비|n|B2|
prepare|준비하다|v|A1|
prepared|준비된, 각오가 된|adj|B1|
prescribe|처방하다, 규정하다|v|C1|
prescription|처방전, 처방약|n|C1|
presence|존재, 참석, 영향력|n|B2|
present|현재의, 참석한|adj|A1|
present|선물, 현재|n|A1|
present|제시하다, 주다, 발표하다|v|A2|
presentation|발표, 프레젠테이션|n|B1|
presently|현재, 지금, 곧|adv|C1|
preservation|보존, 보호|n|C1|
preserve|보존하다, 지키다|v|B2|
preside|주재하다, 사회를 보다|v|C1|
presidency|대통령직, 회장직|n|C1|
president|대통령, 회장|n|A2|
presidential|대통령의, 총장의|adj|B2|
press|언론, 출판물, 압축기|n|B1|
press|누르다, 압박하다|v|B1|
pressure|압력, 압박감|n|B1|
prestigious|명망 있는, 일류의|adj|C1|
presumably|아마도, 짐작건대|adv|C1|
presume|추정하다, 상정하다|v|C1|
pretend|~인 척하다, 가장하다|v|B1|
pretty|예쁜|adj|A1|
pretty|꽤, 상당히|adv|A1|
prevail|만연하다, 승리하다|v|C1|
prevalence|유행, 널리 퍼짐|n|C1|
prevent|예방하다, 막다|v|A2|
prevention|예방, 방지|n|C1|
preview|시사회, 미리보기|n|B2|
preview|미리 보다, 예고편을 상영하다|v|B2|
previous|이전의, 앞선|adj|B1|
previously|이전에, 사전에|adv|B1|
prey|먹이, 사냥감|n|C1|
price|가격, 값|n|A1|
price|가격을 매기다, 값을 매기다|v|B2|
pride|자부심, 자존심|n|B2|
priest|사제, 신부, 성직자|n|B1|
primarily|주로, 근본적으로|adv|B2|
primary|주요한, 최초의|adj|B1|
prime|주요한, 최상의, 제1의|adj|B2|
prince|왕자|n|B1|
princess|공주|n|B1|
principal|주요한, 주된|adj|B2|
principal|교장, 학장|n|B1|
principle|원칙, 원리|n|B2|
print|인쇄물, 판화|n|B2|
print|인쇄하다, 출력하다|v|A2|
printer|프린터, 인쇄기|n|A2|
printing|인쇄, 인쇄술|n|B1|
prior|사전의, 이전의|adj|B2|
prioritize|우선순위를 매기다, 우선시하다|v|C1|
priority|우선순위, 우선권|n|B2|
prison|교도소, 감옥|n|A2|
prisoner|죄수, 포로|n|B1|
privacy|사생활, 프라이버시|n|B2|
private|개인적인, 사적인|adj|B1|
privilege|특권, 특혜|n|C1|
prize|상, 상품|n|A2|
probability|확률, 개연성|n|B2|
probable|개연성 있는, 유망한|adj|B2|
probably|아마도|adv|A1|
probe|탐침, 철저한 조사|n|C1|
probe|조사하다, 살피다|v|C1|
problem|문제|n|A1|
problematic|문제가 되는, 불확실한|adj|C1|
procedure|절차, 순서|n|B2|
proceed|진행하다, 나아가다|v|B2|
proceeding|소송 절차, 행사|n|C1|
proceeds|수익금|n|C1|
process|과정, 절차|n|A2|
process|처리하다, 가공하다|v|B2|
processing|가공, 처리|n|C1|
processor|처리기, 프로세서|n|C1|
proclaim|선언하다, 공포하다|v|C1|
produce|농산물, 생산물|n|B2|
produce|생산하다, 만들다|v|A2|
producer|제작자, 프로듀서, 생산자|n|B1|
product|제품, 상품|n|A1|
production|생산, 제작|n|B1|
productive|생산적인, 결실 있는|adj|C1|
productivity|생산성|n|C1|
profession|직업, 전문직|n|B1|
professional|전문적인, 직업적인|adj|A2|
professional|전문가, 프로|n|B2|
professor|교수|n|A2|
profile|프로필, 인물 소개|n|A2|
profit|수익, 이윤|n|B1|
profitable|수익성이 좋은, 이익이 되는|adj|C1|
profound|심오한, 엄청난, 깊은|adj|C1|
program|프로그램, 방송 프로그램|n|A1|
program|프로그램을 짜다, 편성하다|v|B1|
programming|프로그래밍, 편성|n|B2|
progress|진전, 진보|n|A2|
progress|진전을 보이다, 나아가다|v|B2|
progressive|진보적인, 점진적인|adj|B2|
prohibit|금지하다|v|B2|
project|프로젝트, 과제|n|A1|
project|예상하다, 투사하다, 보여주다|v|B2|
projection|예측, 투사, 영사|n|C1|
prominent|저명한, 두드러진|adj|C1|
promise|약속|n|A2|
promise|약속하다|v|A2|
promising|유망한, 전망이 밝은|adj|B2|
promote|홍보하다, 승진시키다|v|B1|
promotion|승진, 홍보, 장려|n|B2|
prompt|유도하다, 자극하다|v|B2|
pronounce|발음하다|v|A2|
pronounced|뚜렷한, 확연한|adj|C1|
proof|증거, 증명|n|B2|
propaganda|선전, 프로파간다|n|C1|
proper|적절한, 올바른|adj|B1|
properly|제대로, 적절히|adv|B1|
property|재산, 부동산, 소유물|n|B1|
proportion|비율, 부분|n|B2|
proposal|제안, 제안서, 청혼|n|B2|
propose|제안하다, 청혼하다|v|B2|
proposition|제의, 명제, 제안|n|C1|
prosecute|기소하다, 공소를 제기하다|v|C1|
prosecution|기소, 소추, 검찰 측|n|C1|
prosecutor|검사|n|C1|
prospect|전망, 가능성|n|B2|
prospective|유망한, 장래의, 잠재적인|adj|C1|
prosperity|번영, 번성|n|C1|
protect|보호하다, 지키다|v|A2|
protection|보호, 방어|n|B2|
protective|보호하는, 방어적인|adj|C1|
protein|단백질|n|B2|
protest|항의, 시위|n|B1|
protest|항의하다, 시위하다|v|B1|
protester|시위자, 항의자|n|B2|
protocol|규약, 프로토콜, 의전|n|C1|
proud|자랑스러운, 자부심 있는|adj|B1|
prove|증명하다, 입증하다|v|B1|
provide|제공하다, 공급하다|v|A2|
province|지방, 주, 도|n|C1|
provincial|지방의, 시골의, 편협한|adj|C1|
provision|조항, 공급, 대비|n|C1|
provoke|도발하다, 유발하다|v|C1|
psychological|심리학적인, 정신적인|adj|B2|
psychologist|심리학자|n|B2|
psychology|심리학|n|B2|
public|대중의, 공공의|adj|A2|
public|일반 사람들, 대중|n|A2|
publication|출판, 출판물|n|B2|
publicity|홍보, 널리 알려짐|n|B2|
publish|출판하다, 게재하다|v|A2|
publishing|출판업, 발행|n|B2|
pull|끌어당김, 당기기|n|B1|
pull|당기다, 끌다|v|A2|
pulse|맥박, 파동|n|C1|
pump|펌프|n|C1|
pump|퍼 올리다, 주입하다|v|C1|
punch|타격, 펀치, 구멍 뚫기|n|C1|
punch|주먹으로 치다, 구멍을 뚫다|v|C1|
punish|처벌하다, 벌주다|v|B1|
punishment|처벌, 벌|n|B1|
punk|펑크, 불량 청소년|n|B2|
purchase|구매, 구매품|n|B2|
purchase|구매하다, 사다|v|B2|
pure|순수한, 완전한|adj|B2|
purely|순전히, 전적으로|adv|C1|
purple|보라색의|adj|A1|
purple|보라색|n|A1|
purpose|목적, 의도|n|A2|
pursue|추구하다, 뒤쫓다|v|B2|
pursuit|추구, 쫓음|n|B2|
push|밀기, 추진|n|B1|
push|밀다|v|A2|
put|놓다, 두다|v|A1|
puzzle|퍼즐, 수수께끼|n|B2|
qualification|자격, 자격증|n|B1|
qualified|자격을 갖춘, 적임의|adj|B1|
qualify|자격을 얻다, 예선을 통과하다|v|B1|
quality|질, 품질, 우수함|n|A2|
quantity|양, 수량|n|A2|
quarter|4분의 1, 15분, 25센트 동전|n|A1|
queen|여왕, 왕비|n|A2|
query|문의, 질의|n|C1|
quest|탐구, 추구|n|C1|
question|질문, 의문|n|A1|
question|질문하다, 의심하다|v|A2|
questionnaire|설문지, 설문 조사|n|B2|
quick|빠른|adj|A1|
quickly|빨리, 신속하게|adv|A1|
quiet|조용한|adj|A1|
quietly|조용히|adv|A2|
quit|그만두다, 떠나다|v|B1|
quite|꽤, 상당히|adv|A1|
quota|할당량, 쿼터|n|C1|
quotation|인용, 인용문|n|B1|
quote|인용구, 견적|n|B1|
quote|인용하다|v|B1|
race|경주, 달리기 시합|n|A2|
race|경주하다, 질주하다|v|A2|
race|인종|n|B1|
racial|인종의, 종족의|adj|B2|
racing|경주, 레이싱|n|B1|
racism|인종차별, 인종주의|n|B2|
racist|인종차별적인|adj|B2|
racist|인종차별주의자|n|B2|
radar|레이더|n|C1|
radiation|방사선, 방사|n|B2|
radical|근본적인, 급진적인|adj|C1|
radio|라디오|n|A1|
rage|격노, 분노|n|C1|
raid|습격, 급습|n|C1|
raid|습격하다, 급습하다|v|C1|
rail|철도, 난간|n|B2|
railroad|철도|n|A2|
rain|비|n|A1|
rain|비가 내리다|v|A1|
raise|임금 인상|n|B1|
raise|올리다, 기르다, 모금하다|v|A2|
rally|집회, 결속, 반등|n|C1|
rally|결집하다, 회복하다|v|C1|
random|무작위의, 닥치는 대로의|adj|B2|
range|범위, 다양성|n|B1|
range|범위가 ~에 이르다, 배열하다|v|B2|
rank|계급, 등급, 순위|n|B2|
rank|순위를 매기다, 등급을 매기다|v|B2|
ranking|순위, 서열|n|C1|
rape|강간, 성폭행|n|C1|
rape|강간하다, 짓밟다|v|C1|
rapid|빠른, 급속한|adj|B2|
rapidly|빠르게, 급속히|adv|B2|
rare|드문, 희귀한|adj|B1|
rarely|드물게, 거의 ~않다|adv|B1|
rat|쥐|n|B2|
rate|비율, 요금, 속도|n|A2|
rate|평가하다, 등급을 매기다|v|B2|
rather|오히려, 꽤|adv|A2|
rating|등급, 시청률, 평점|n|B2|
ratio|비율, 비|n|C1|
rational|합리적인, 이성적인|adj|C1|
raw|익히지 않은, 가공되지 않은, 날것의|adj|B2|
ray|광선, 빛살|n|C1|
reach|도달 범위, 거리|n|B2|
reach|도달하다, 손을 뻗다|v|A2|
react|반응하다|v|A2|
reaction|반응, 반작용|n|B1|
read|읽다|v|A1|
reader|독자|n|A1|
readily|손쉽게, 기꺼이|adv|C1|
reading|읽기, 독서|n|A1|
ready|준비된|adj|A1|
real|진짜의, 실제의|adj|A1|
realistic|현실적인, 실현 가능한|adj|B2|
reality|현실, 실제|n|B1|
realization|깨달음, 실현|n|C1|
realize|깨닫다, 실현하다|v|A2|
really|정말로, 진짜로|adv|A1|
realm|영역, 왕국|n|C1|
rear|뒤쪽의, 후방의|adj|C1|
rear|뒤쪽, 후방|n|C1|
reason|이유, 까닭|n|A1|
reasonable|합리적인, 타당한, 적당한|adj|B2|
reasonably|합리적으로, 꽤|adv|B2|
reasoning|추론, 추리|n|C1|
reassure|안심시키다, 확신을 주다|v|C1|
rebel|반역자, 반항아|n|C1|
rebellion|반란, 폭동|n|C1|
rebuild|재건하다, 다시 짓다|v|B2|
recall|기억해내다, 회상하다|v|B2|
receipt|영수증|n|B1|
receive|받다|v|A2|
receiver|수화기, 수신인, 리시버|n|B2|
recent|최근의|adj|A2|
recently|최근에|adv|A2|
reception|접수처, 환영 파티|n|A2|
recession|경기 침체, 불황|n|B2|
recipe|요리법, 레시피|n|A2|
recipient|수령인, 수혜자|n|C1|
reckon|생각하다, 추정하다|v|B2|
recognition|인정, 인식, 표창|n|B2|
recognize|알아보다, 인정하다|v|A2|
recommend|추천하다, 권하다|v|A2|
recommendation|추천, 권고|n|B1|
reconstruction|재건, 복원|n|C1|
record|기록, 음반|n|A2|
record|기록하다, 녹음하다|v|A2|
recording|녹음, 녹화|n|A2|
recount|이야기하다, 열거하다|v|C1|
recover|회복하다, 되찾다|v|B2|
recovery|회복, 되찾음|n|B2|
recruit|신병, 신입 사원|n|B2|
recruit|모집하다, 채용하다|v|B2|
recruitment|채용, 모집|n|C1|
recycle|재활용하다|v|A2|
red|빨간, 빨간색의|adj|A1|
red|빨간색|n|A1|
reduce|줄이다, 낮추다|v|A2|
reduction|축소, 감소, 삭감|n|B2|
refer|참조하다, 언급하다|v|A2|
referee|심판|n|B2|
reference|언급, 참조, 추천서|n|B1|
referendum|국민투표|n|C1|
reflect|비추다, 반사하다, 반영하다|v|B1|
reflection|반영, 반사, 심사숙고|n|C1|
reform|개혁, 쇄신|n|C1|
reform|개혁하다, 개선하다|v|C1|
refuge|피난처, 은신처|n|C1|
refugee|난민, 망명자|n|B2|
refund|환불, 환불금|n|B2|
refund|환불하다|v|B2|
refusal|거부, 거절|n|C1|
refuse|거절하다, 거부하다|v|A2|
regain|되찾다, 회복하다|v|C1|
regard|존중, 안부, 관심|n|B2|
regard|여기다, 간주하다|v|B2|
regardless|상관없이, 개의치 않고|adv|C1|
regime|정권, 체제|n|C1|
region|지방, 지역|n|A2|
regional|지역의, 지방의|adj|B2|
register|등록부, 명부, 금전등록기|n|B2|
register|등록하다, 기록하다|v|B2|
registration|등록, 접수|n|B2|
regret|후회, 유감|n|B2|
regret|후회하다, 유감스러워하다|v|B2|
regular|규칙적인, 보통의|adj|A2|
regularly|정기적으로, 규칙적으로|adv|B1|
regulate|규제하다, 조절하다|v|B2|
regulation|규정, 규제|n|B2|
regulator|규제 기관, 조정기|n|C1|
regulatory|규제의, 통제하는|adj|C1|
rehabilitation|재활, 갱생, 복권|n|C1|
reign|통치 기간, 치세|n|C1|
reign|다스리다, 군림하다|v|C1|
reinforce|강화하다, 보강하다|v|B2|
reject|거절하다, 거부하다|v|B1|
rejection|거절, 기각|n|C1|
relate|관련시키다, 결부짓다|v|B1|
related|관련된, 친척의|adj|B1|
relation|관계, 관련|n|B1|
relationship|관계, 관련|n|A2|
relative|상대적인, 비교상의|adj|B1|
relative|친척|n|B1|
relatively|비교적, 상대적으로|adv|B2|
relax|휴식을 취하다, 쉬다|v|A1|
relaxed|느긋한, 편안한|adj|B1|
relaxing|휴식이 되는, 편안하게 해주는|adj|B1|
release|석방, 출시, 개봉|n|B1|
release|출시하다, 공개하다, 석방하다|v|B1|
relevance|관련성, 적합성|n|C1|
relevant|관련된, 적절한|adj|B2|
reliability|신뢰도, 신뢰성|n|C1|
reliable|믿을 수 있는, 신뢰할 만한|adj|B1|
relief|안도, 다행, 구호|n|B2|
relieve|덜어주다, 안도하게 하다|v|B2|
relieved|안도하는, 다행으로 여기는|adj|B2|
religion|종교|n|B1|
religious|종교적인, 독실한|adj|B1|
reluctant|꺼리는, 마지못해 하는|adj|C1|
rely|의지하다, 믿다|v|B2|
remain|여전히 ~이다, 남다|v|B1|
remainder|나머지, 잔여|n|C1|
remains|유해, 유적, 남은 것|n|C1|
remark|발언, 주목|n|B2|
remark|언급하다, 논평하다|v|B2|
remarkable|주목할 만한, 놀라운|adj|B2|
remedy|해결책, 치료제|n|C1|
remember|기억하다|v|A1|
remind|상기시키다, 생각나게 하다|v|B1|
reminder|상기시키는 것, 독촉장|n|C1|
remote|외딴, 먼|adj|B1|
removal|제거, 철거, 해임|n|C1|
remove|제거하다, 치우다|v|A2|
render|~하게 만들다, 제공하다|v|C1|
renew|갱신하다, 재개하다|v|C1|
renewable|재생 가능한|adj|B1|
renowned|유명한, 명성 있는|adj|C1|
rent|집세, 임대료|n|B1|
rent|임대하다, 세내다|v|B1|
rental|대여, 임대료|n|B2|
repair|수리, 보수|n|B1|
repair|수리하다, 고치다|v|A2|
repeat|반복|n|B1|
repeat|반복하다, 따라 하다|v|A1|
repeated|반복되는, 거듭된|adj|B1|
replace|대체하다, 바꾸다|v|A2|
replacement|교체, 대체품, 후임자|n|C1|
reply|답장, 대답|n|A2|
reply|대답하다, 답장하다|v|A2|
report|보고서, 보도|n|A1|
report|보고하다, 보도하다|v|A2|
reportedly|전하는 바에 따르면, 보도에 따르면|adv|C1|
reporter|기자, 리포터|n|A2|
reporting|보도, 보고|n|B2|
represent|대표하다, 나타내다|v|B1|
representation|대표, 대의제, 묘사|n|C1|
representative|대표적인, 대표하는|adj|B2|
representative|대표자, 대리인|n|B2|
reproduce|복제하다, 번식하다|v|C1|
republic|공화국|n|C1|
reputation|평판, 명성|n|B2|
request|요청, 신청|n|A2|
request|요청하다, 요구하다|v|B1|
require|필요로 하다, 요구하다|v|B1|
requirement|요구 조건, 필요조건|n|B2|
rescue|구조, 구출|n|B2|
rescue|구조하다, 구출하다|v|B2|
research|연구, 조사|n|A2|
research|연구하다, 조사하다|v|A2|
researcher|연구원, 조사원|n|A2|
resemble|닮다, 유사하다|v|C1|
reservation|예약|n|B1|
reserve|비축물, 예약, 보호구역|n|B2|
reserve|예약하다, 남겨두다|v|B2|
reside|거주하다, 속하다|v|C1|
residence|거주지, 주택|n|C1|
resident|거주하는, 상주하는|adj|B2|
resident|거주자, 주민|n|B2|
residential|주거지의, 거주의|adj|C1|
resign|사임하다, 물러나다|v|B2|
resignation|사임, 사직서|n|C1|
resilience|회복력, 탄력성|n|C1|
resist|저항하다, 참다|v|B2|
resistance|저항, 반대|n|C1|
resolution|해결, 결의안, 다짐|n|B2|
resolve|해결하다, 결심하다|v|B2|
resort|휴양지, 리조트|n|B2|
resource|자원, 재원|n|B1|
respect|존경, 존중|n|B1|
respect|존경하다, 존중하다|v|B1|
respective|각자의, 각각의|adj|C1|
respectively|각각, 제각기|adv|C1|
respond|응답하다, 반응하다|v|A2|
response|응답, 대답|n|A2|
responsibility|책임, 의무|n|B1|
responsible|책임이 있는, 책임감 있는|adj|B1|
rest|나머지|n|A2|
rest|휴식, 안식|n|A2|
rest|쉬다, 휴식을 취하다|v|A2|
restaurant|식당, 레스토랑|n|A1|
restoration|복원, 복구|n|C1|
restore|복원하다, 회복시키다|v|B2|
restraint|자제, 억제, 규제|n|C1|
restrict|제한하다, 한정하다|v|B2|
restriction|제한, 규제|n|B2|
result|결과|n|A1|
result|결과로 발생하다, 초래되다|v|B1|
resume|재개하다, 다시 시작하다|v|C1|
résumé|이력서|n|B2|
retail|소매, 유통|n|B2|
retain|유지하다, 보유하다|v|B2|
retire|은퇴하다, 퇴직하다|v|B1|
retired|은퇴한, 퇴직한|adj|B1|
retirement|은퇴, 퇴직|n|B2|
retreat|후퇴, 퇴각, 은둔처|n|C1|
retreat|후퇴하다, 물러서다|v|C1|
retrieve|되찾다, 회수하다|v|C1|
return|돌아옴, 귀환, 반품|n|A1|
return|돌아오다, 반납하다|v|A1|
reveal|밝히다, 드러내다|v|B2|
revelation|폭로, 드러남, 계시|n|C1|
revenge|복수, 보복|n|C1|
revenue|수익, 세입|n|B2|
reverse|반대의, 거꾸로의|adj|C1|
reverse|반대, 역전|n|C1|
reverse|뒤집다, 반전시키다|v|C1|
review|복습, 검토, 후기|n|A2|
review|재검토하다, 복습하다|v|A2|
revise|수정하다, 개정하다|v|B1|
revision|수정, 개정|n|B2|
revival|부활, 부흥|n|C1|
revive|되살리다, 부활시키다|v|C1|
revolution|혁명, 변혁|n|B2|
revolutionary|혁명적인, 획기적인|adj|C1|
reward|보상, 현상금|n|B2|
reward|보상하다, 보답하다|v|B2|
rhetoric|수사법, 미사여구|n|C1|
rhythm|리듬, 규칙적인 변화|n|B2|
rice|쌀, 밥|n|A1|
rich|부유한, 부자인|adj|A1|
rid|제거하다, 없애다|v|B2|
ride|타기, 승차|n|A2|
ride|타다|v|A1|
ridiculous|말도 안 되는, 터무니없는|adj|B2|
rifle|소총, 라이플|n|C1|
right|옳은, 알맞은, 오른쪽의|adj|A1|
right|곧바로, 정확히, 바로|adv|A1|
right|오른쪽, 권리|n|A1|
ring|반지, 고리|n|A2|
ring|벨 소리|n|B1|
ring|울리다, 전화를 걸다|v|A2|
riot|폭동, 소요|n|C1|
rip|찢다, 뜯어내다|v|C1|
rise|상승, 증가|n|B2|
rise|오르다, 뜨다, 일어나다|v|A2|
risk|위험, 모험|n|B1|
risk|위험을 무릅쓰다|v|B1|
risky|위험한|adj|B2|
ritual|의식, 의례|n|C1|
rival|경쟁하는, 라이벌의|adj|B2|
rival|경쟁자, 라이벌|n|B2|
river|강, 하천|n|A1|
road|도로, 길|n|A1|
rob|털다, 강탈하다|v|B2|
robbery|강도 사건, 도난|n|B2|
robot|로봇|n|B1|
robust|튼튼한, 탄탄한, 강력한|adj|C1|
rock|흔들다, 뒤흔들다|v|C1|
rock|록 음악|n|A2|
rock|돌, 바위|n|A2|
rocket|로켓|n|B2|
role|역할, 직책|n|A2|
roll|두루마리, 롤빵, 회전|n|B1|
roll|구르다, 굴리다|v|B1|
romance|로맨스, 연애|n|B2|
romantic|낭만적인, 로맨틱한|adj|B1|
roof|지붕|n|A2|
rookie|신인, 루키|n|C1|
room|방, 공간|n|A1|
root|뿌리, 근원|n|B2|
rope|밧줄, 로프|n|B1|
rose|장미|n|B2|
roster|명부, 등록 명단|n|C1|
rotate|회전하다, 교대하다|v|C1|
rotation|회전, 순환 근무|n|C1|
rough|거친, 대략적인|adj|B1|
roughly|대략, 거칠게|adv|B2|
round|둥근, 원형의|adj|A2|
round|빙 둘러, 둥글게|adv|A2|
round|라운드, 한판, 순환|n|B2|
round|~의 둘레에, ~을 빙 돌아|prep|A2|
route|경로, 노선|n|A2|
routine|일상적인, 정기적인|adj|B2|
routine|일상, 루틴|n|A1|
row|열, 줄, 노 젓기|n|B1|
royal|왕실의, 국왕의|adj|B1|
rub|문지르다, 비비다|v|B2|
rubber|고무로 만든|adj|B2|
rubber|고무|n|B2|
rude|무례한, 버릇없는|adj|A2|
ruin|폐허, 파멸|n|B2|
ruin|망치다, 파멸시키다|v|B2|
rule|규칙, 규칙성|n|A1|
rule|지배하다, 판결하다|v|B1|
ruling|판결, 결정|n|C1|
rumor|소문, 풍문|n|C1|
run|달리기, 주행|n|A2|
run|달리다, 뛰다|v|A1|
runner|주자, 달리는 사람|n|A2|
running|달리기, 러닝|n|A2|
rural|시골의, 전원의|adj|B2|
rush|돌진, 혼잡, 서두름|n|B2|
rush|서두르다, 돌진하다|v|B2|
sacred|성스러운, 종교적인|adj|C1|
sacrifice|희생, 제물|n|C1|
sacrifice|희생하다, 제물로 바치다|v|C1|
sad|슬픈|adj|A1|
sadly|슬프게도, 아쉽게도|adv|A2|
safe|안전한|adj|A2|
safeguard|보호 장치, 예방 조치|n|C1|
safeguard|보호하다, 수호하다|v|C1|
safety|안전|n|B1|
sail|돛, 항해|n|B1|
sail|항해하다, 요트를 타다|v|A2|
sailing|항해, 요트 타기|n|A2|
sailor|선원, 뱃사람|n|B1|
sake|위함, 이익|n|C1|
salad|샐러드|n|A1|
salary|급여, 월급|n|A2|
sale|판매, 할인 판매|n|A2|
salt|소금|n|A1|
same|같은, 동일한|adj|A1|
same|마찬가지로, 똑같이|adv|A1|
same|같은 사람, 같은 것|pron|A1|
sample|견본, 샘플, 표본|n|B1|
sample|맛보다, 표본 조사를 하다|v|B2|
sanction|제재, 인가, 처벌|n|C1|
sand|모래|n|B1|
sandwich|샌드위치|n|A1|
satellite|위성, 인공위성|n|B2|
satisfaction|만족, 만족감|n|B2|
satisfied|만족해하는|adj|B2|
satisfy|만족시키다, 충족하다|v|B2|
Saturday|토요일|n|A1|
sauce|소스, 양념|n|A2|
save|구하다, 저축하다, 아끼다|v|A2|
saving|절약, 저축, 적금|n|B2|
say|발언권, 주장|n|C1|
say|말하다|v|A1|
scale|규모, 저울, 척도|n|B2|
scam|사기, 수법|n|C1|
scam|사기 치다|v|C1|
scan|살펴보다, 스캔하다|v|B1|
scandal|스캔들, 추문|n|B2|
scare|불안, 공포|n|B2|
scare|겁주다, 깜짝 놀라게 하다|v|B2|
scared|겁먹은, 무서워하는|adj|A2|
scary|무서운, 겁나는|adj|A2|
scattered|흩어진, 산발적인|adj|C1|
scenario|시나리오, 예상 상황|n|B2|
scene|장면, 현장|n|A2|
schedule|일정, 스케줄|n|A2|
schedule|일정을 잡다, 예정하다|v|B2|
scholar|학자|n|B2|
scholarship|장학금|n|B2|
school|학교|n|A1|
science|과학|n|A1|
scientific|과학적인|adj|B1|
scientist|과학자|n|A1|
scope|범위, 영역|n|C1|
score|점수, 득점|n|A2|
score|득점하다, 점수를 내다|v|A2|
scrap|조각, 고철|n|C1|
scrap|폐기하다, 버리다|v|C1|
scratch|긁힌 자국, 찰과상|n|B2|
scratch|긁다, 할퀴다|v|B2|
scream|비명, 절규|n|B2|
scream|비명을 지르다, 소리치다|v|B2|
screen|화면, 스크린|n|A2|
screen|가려내다, 상영하다, 차단하다|v|B2|
screening|선별, 상영, 검사|n|B2|
screw|나사|n|C1|
screw|나사로 고정하다, 망치다|v|C1|
script|대본, 글씨체|n|B1|
scrutiny|정밀 조사, 철저한 검토|n|C1|
sea|바다|n|A2|
seal|직인, 바다표범, 봉인|n|C1|
seal|봉인하다, 직인을 찍다|v|C1|
search|검색, 수색|n|A2|
search|찾다, 수색하다|v|A2|
season|계절, 시기|n|A2|
seasonal|계절의, 계절에 따른|adj|C1|
seat|좌석, 자리|n|A2|
seat|앉히다, 자리를 마련하다|v|B2|
second|둘째로, 다음으로|adv|A2|
second|두 번째의|det|A1|
second|두 번째|num|A1|
second|초 (시간 단위)|n|A1|
secondary|이차적인, 중등의|adj|B1|
secondly|둘째로|adv|C1|
secret|비밀의|adj|A2|
secret|비밀|n|A2|
secretary|비서|n|A2|
section|부분, 구역|n|A1|
sector|부문, 분야|n|B2|
secular|세속적인, 비종교적인|adj|C1|
secure|안전한, 확실한, 안정된|adj|B2|
secure|확보하다, 안전하게 지키다|v|B2|
security|보안, 안전, 경비|n|B1|
see|보다, 알다, 만나다|v|A1|
seed|씨앗, 종자|n|B1|
seek|찾다, 구하다|v|B2|
seeker|구직자, 찾는 사람|n|B2|
seem|~처럼 보이다, ~인 것 같다|v|A2|
seize|붙잡다, 장악하다|v|C1|
select|선택하다, 선발하다|v|B2|
selection|선택, 선발, 정선품|n|B2|
selective|선별적인, 까다로운|adj|C1|
self|자아, 자신|n|B2|
sell|팔다, 판매하다|v|A1|
seminar|세미나, 연구회|n|B2|
senate|상원|n|B2|
senator|상원의원|n|B2|
send|보내다|v|A1|
senior|고위의, 상급의, 연상의|adj|B2|
sensation|돌풍, 감각, 센세이션|n|C1|
sense|감각, 느낌|n|A2|
sense|감지하다, 느끼다|v|B2|
sensible|합리적인, 분별 있는|adj|B1|
sensitive|민감한, 예민한, 세심한|adj|B2|
sensitivity|감수성, 민감도|n|C1|
sensor|감지기, 센서|n|B2|
sentence|문장|n|A1|
sentence|선고를 내리다, 판결하다|v|B2|
sentiment|정서, 감정|n|C1|
separate|분리된, 별개의|adj|A2|
separate|분리하다, 떼어놓다|v|B1|
separation|분리, 구분|n|C1|
September|9월|n|A1|
sequel|속편, 후속작|n|C1|
sequence|연속, 순서|n|B2|
serial|연쇄적인, 순차적인|adj|C1|
series|연속물, 시리즈|n|A2|
serious|심각한, 진지한|adj|A2|
seriously|진지하게, 심각하게|adv|B1|
servant|하인, 종|n|B1|
serve|제공하다, 서빙하다, 복무하다|v|A2|
service|서비스, 봉사|n|A2|
session|기간, 회기, 세션|n|B2|
set|세트, 한 벌, 모음|n|B1|
set|놓다, 맞추다|v|B1|
setting|배경, 환경, 설정|n|B1|
settle|해결하다, 정착하다|v|B2|
settlement|합의, 정착지, 해결|n|C1|
settler|정착민, 이주민|n|B2|
setup|설정, 구성, 구조|n|C1|
seven|7, 일곱|num|A1|
seventeen|17, 열일곱|num|A1|
seventy|70, 일흔|num|A1|
several|몇몇의, 여럿의|det|A2|
several|몇몇, 몇 사람/몇 개|pron|A2|
severe|심각한, 가혹한, 엄격한|adj|B2|
severely|심하게, 엄격하게|adv|B2|
sex|성별, 성, 성관계|n|B1|
sexual|성의, 성적인|adj|B1|
sexuality|성적 지향, 성 정체성|n|C1|
sexy|섹시한, 매력적인|adj|B2|
shade|그늘, 블라인드|n|B2|
shadow|그림자|n|B2|
shake|흔들기, 셰이크 (음료)|n|B1|
shake|흔들다, 흔들리다|v|A2|
shall|~일 것이다, ~하겠다|modal v|B2|
shallow|얕은, 얄팍한|adj|B2|
shame|수치심, 안타까운 일|n|B2|
shape|모양, 형태|n|A2|
shape|형성하다, 빚다|v|B2|
shaped|~ 모양의, 형태가 잡힌|adj|B2|
share|몫, 지분, 주식|n|B1|
share|공유하다, 나누다|v|A1|
shareholder|주주|n|C1|
sharp|날카로운, 예리한|adj|B1|
shatter|산산이 부서지다, 산산조각 내다|v|C1|
she|그녀는, 그녀가|pron|A1|
shed|흘리다, 벗다, 떨쳐내다|v|C1|
sheep|양|n|A1|
sheer|순전한, 깎아지른 듯한|adj|C1|
sheet|한 장, 침대 시트|n|A2|
shelf|선반, 책꽂이|n|B1|
shell|껍데기, 조개껍데기|n|B1|
shelter|피난처, 쉼터|n|B2|
shelter|피난처를 제공하다, 보호하다|v|B2|
shift|변화, 교대 근무|n|B1|
shift|바꾸다, 이동하다|v|B2|
shine|빛나다, 비추다|v|B1|
shiny|빛나는, 반짝이는|adj|B1|
ship|배, 선박|n|A2|
ship|배송하다, 운송하다|v|B2|
shipping|배송, 운송|n|C1|
shirt|셔츠|n|A1|
shock|충격, 감전|n|B2|
shock|충격을 주다, 깜짝 놀라게 하다|v|B2|
shocked|충격받은, 깜짝 놀란|adj|B2|
shocking|충격적인|adj|B2|
shoe|신발|n|A1|
shoot|촬영, 싹|n|C1|
shoot|쏘다, 사격하다, 촬영하다|v|B1|
shooting|사격, 총격, 촬영|n|B2|
shop|가게, 상점|n|A1|
shop|쇼핑하다, 장을 보다|v|A1|
shopping|쇼핑, 장보기|n|A1|
shore|해안, 기슭|n|B2|
short|짧은, 키가 작은|adj|A1|
short-term|단기적인|adj|B2|
shortage|부족, 결핍|n|B2|
shortly|곧, 얼마 안 있어|adv|B2|
shot|시도, 주사, 슛, 발사|n|B2|
should|~해야 한다|modal v|A1|
shoulder|어깨|n|A2|
shout|외침, 고함|n|A2|
shout|소리치다, 외치다|v|A2|
show|쇼, 공연, 프로그램|n|A1|
show|보여주다|v|A1|
shower|샤워, 샤워기|n|A1|
shrink|줄어들다, 움츠러들다|v|C1|
shut|닫힌|adj|A2|
shut|닫다, 다물다|v|A2|
shy|수줍어하는, 부끄러운|adj|B1|
sibling|형제자매|n|B2|
sick|아픈|adj|A1|
side|옆면, 측면, 편|n|A2|
sidewalk|보도, 인도|n|B2|
sigh|한숨, 탄식|n|C1|
sigh|한숨을 쉬다|v|C1|
sight|시력, 시야, 광경|n|B1|
sign|표지판, 기호, 징후|n|A2|
sign|서명하다, 신호하다|v|A2|
signal|신호, 신호등|n|B1|
signal|신호하다, 암시하다|v|B1|
signature|서명, 사인|n|B2|
significance|중요성, 중대함|n|B2|
significant|중요한, 상당한|adj|B2|
significantly|상당히, 의미 있게|adv|B2|
silence|침묵, 고요|n|B2|
silent|조용한, 침묵하는|adj|B1|
silk|비단, 실크|n|B2|
silly|어리석은, 바보 같은|adj|B1|
silver|은색의, 은으로 만든|adj|A2|
silver|은, 은메달|n|A2|
similar|비슷한, 유사한|adj|A1|
similarity|유사점, 닮음|n|B1|
similarly|비슷하게, 마찬가지로|adv|B1|
simple|간단한, 단순한|adj|A2|
simply|단순히, 그냥|adv|B1|
simulation|모의실험, 시뮬레이션|n|C1|
simultaneously|동시에, 일제히|adv|C1|
sin|죄, 죄악|n|C1|
since|그 이후로|adv|B1|
since|~한 이래로, ~ 때문에|conj|A2|
since|~ 이후로, ~ 이래로|prep|A2|
sincere|진실한, 진심 어린|adj|B2|
sing|노래하다|v|A1|
singer|가수|n|A1|
singing|노래하기, 가창|n|A2|
single|단 하나의, 미혼의|adj|A2|
single|독신자, 미혼자|n|A2|
sink|가라앉다, 빠지다|v|B1|
sir|손님, 선생님 (남성 존칭)|n|A2|
sister|자매, 여동생, 누나/언니|n|A1|
sit|앉다|v|A1|
site|장소, 유적지, 사이트|n|A2|
situated|위치한, 자리 잡은|adj|C1|
situation|상황, 처지|n|A1|
six|6, 여섯|num|A1|
sixteen|16, 열여섯|num|A1|
sixty|60, 예순|num|A1|
size|크기, 치수|n|A2|
skeptical|회의적인, 의심 많은|adj|C1|
sketch|스케치, 개요|n|C1|
ski|스키용의|adj|A2|
ski|스키|n|A2|
ski|스키를 타다|v|A2|
skiing|스키 타기|n|A2|
skill|기술, 솜씨|n|A1|
skilled|숙련된, 노련한|adj|B2|
skin|피부, 가죽|n|A2|
skip|건너뛰다, 거르다|v|C1|
skirt|치마, 스커트|n|A1|
skull|두개골|n|B2|
sky|하늘|n|A2|
slam|쾅 닫다, 세게 치다|v|C1|
slap|손바닥으로 때리다, 철썩 치다|v|C1|
slash|대폭 줄이다, 베다|v|C1|
slave|노예|n|B1|
slavery|노예 제도, 노예 상태|n|C1|
sleep|잠, 수면|n|A2|
sleep|자다|v|A1|
slice|조각, 얇은 편|n|B1|
slice|얇게 썰다, 자르다|v|B1|
slide|미끄럼틀, 슬라이드|n|B2|
slide|미끄러지다, 미끄러지듯 움직이다|v|B2|
slight|약간의, 조금의|adj|B2|
slightly|약간, 조금|adv|B1|
slip|미끄러지다, 빠져나가다|v|B2|
slogan|슬로건, 구호|n|B2|
slope|경사지, 비탈|n|B2|
slope|경사지다, 기울다|v|B2|
slot|자리, 투입구, 시간대|n|C1|
slow|느린|adj|A1|
slow|속도를 늦추다|v|B1|
slowly|천천히, 느리게|adv|A2|
small|작은|adj|A1|
smart|똑똑한, 영리한|adj|A1|
smartphone|스마트폰|n|A2|
smash|박살 내다, 때려 부수다|v|C1|
smell|냄새, 향기|n|A2|
smell|냄새를 맡다, 냄새가 나다|v|A2|
smile|미소|n|A2|
smile|미소 짓다|v|A2|
smoke|연기|n|A1|
smoke|담배를 피우다|v|A1|
smoking|흡연|n|A1|
smooth|부드러운, 매끄러운|adj|B1|
snake|뱀|n|A1|
snap|탁 부러지다, 딱 소리를 내다|v|C1|
sneaker|운동화|n|A2|
snow|눈|n|A1|
snow|눈이 내리다|v|A1|
so|그렇게, 너무, 아주|adv|A1|
so|그래서, 그러므로|conj|A1|
so-called|소위, 이른바|adj|B2|
soak|담그다, 흠뻑 적시다|v|C1|
soap|비누|n|A2|
soar|치솟다, 급등하다|v|C1|
soccer|축구|n|A2|
social|사회의, 사교의|adj|A2|
socialist|사회주의의|adj|C1|
society|사회, 협회|n|A2|
sock|양말|n|A2|
soft|부드러운|adj|A2|
software|소프트웨어|n|B1|
soil|토양, 흙|n|B1|
solar|태양의, 태양열의|adj|B2|
soldier|군인|n|A2|
sole|단독의, 유일한|adj|C1|
solely|오로지, 단독으로|adv|C1|
solid|단단한, 고체의|adj|B1|
solid|고체|n|B1|
solidarity|연대, 결속|n|C1|
solo|단독의, 솔로의|adj|C1|
solo|단독 공연, 솔로|n|C1|
solution|해결책, 정답|n|A2|
solve|해결하다, 풀다|v|A2|
some|몇몇의, 약간의|det|A1|
some|몇몇, 약간|pron|A1|
somebody|어떤 사람, 누군가|pron|A1|
somehow|어떻게든, 왠지|adv|B2|
someone|어떤 사람, 누군가|pron|A1|
something|어떤 것, 무언가|pron|A1|
sometime|언젠가|adv|B2|
sometimes|때때로, 가끔|adv|A1|
somewhat|다소, 어느 정도|adv|B2|
somewhere|어딘가에, 어딘가로|adv|A2|
somewhere|어딘가|pron|A2|
son|아들|n|A1|
song|노래|n|A1|
soon|곧, 머지않아|adv|A1|
sophisticated|정교한, 세련된, 수준 높은|adj|B2|
sophomore|2학년생|n|C1|
sorry|미안한, 유감스러운|adj|A1|
sorry|미안해요, 죄송합니다|exclam|A1|
sort|종류, 부류|n|A2|
sort|분류하다, 구분하다|v|B1|
soul|영혼, 정신|n|B2|
sound|건전한, 건강한, 타당한|adj|C1|
sound|소리, 음|n|A1|
sound|~처럼 들리다|v|A1|
soup|수프|n|A1|
source|원천, 출처|n|A2|
south|남쪽의|adj|A1|
south|남쪽으로|adv|A1|
south|남쪽|n|A1|
southern|남쪽의, 남부의|adj|B1|
sovereignty|주권, 통치권|n|C1|
space|우주, 공간|n|A1|
span|기간, 폭, 전면|n|C1|
span|걸치다, 이어지다|v|C1|
spare|여분의, 남는|adj|B2|
spare|아끼다, 할애하다, 용서하다|v|C1|
spark|촉발하다, 불꽃을 튀기다|v|C1|
speak|말하다, 이야기하다|v|A1|
speaker|연사, 화자, 스피커|n|A2|
special|특별한|adj|A1|
specialist|전문적인|adj|B2|
specialist|전문가|n|B2|
specialize|전공하다, 전문으로 하다|v|B2|
specialized|전문적인, 특화된|adj|C1|
species|종 (생물 분류)|n|B2|
specific|구체적인, 특정한|adj|A2|
specifically|구체적으로, 명확히|adv|B1|
specification|명세서, 사양|n|C1|
specify|명시하다, 구체적으로 밝히다|v|B2|
specimen|표본, 견본|n|C1|
spectacle|장관, 구경거리|n|C1|
spectacular|장관을 이루는, 극적인|adj|B2|
spectator|관중, 관객|n|B2|
spectrum|스펙트럼, 범위|n|C1|
speculate|추측하다, 투기하다|v|B2|
speculation|추측, 투기|n|B2|
speech|연설, 말|n|A2|
speed|속도|n|A2|
speed|속도를 내다, 빠르게 가다|v|B2|
spell|주문, 마법, 한동안|n|C1|
spell|철자를 쓰다/말하다|v|A1|
spelling|철자법, 맞춤법|n|A1|
spend|(돈·시간을) 쓰다, 보내다|v|A1|
spending|지출, 소비|n|B1|
sphere|영역, 구체|n|C1|
spice|양념, 향신료|n|B2|
spicy|매운, 양념이 들어간|adj|B1|
spider|거미|n|A2|
spill|쏟다, 흘리다|v|B2|
spin|회전, 왜곡 보도|n|C1|
spin|돌리다, 회전시키다, 왜곡하다|v|C1|
spine|척추, 등뼈|n|C1|
spirit|정신, 영혼, 기운|n|B1|
spiritual|영적인, 정신적인|adj|B2|
spite|악의, 원한|n|B2|
split|분열, 찢어진 틈|n|B2|
split|나누다, 쪼개다|v|B2|
spoil|망치다, 응석을 받아주다|v|B2|
spoken|구어의, 말로 하는|adj|B1|
spokesman|대변인 (남성)|n|B2|
spokesperson|대변인|n|B2|
spokeswoman|대변인 (여성)|n|B2|
sponsor|후원자, 스폰서|n|B2|
sponsor|후원하다, 협찬하다|v|B2|
sponsorship|후원, 협찬|n|B2|
spoon|숟가락, 스푼|n|A2|
sport|스포츠, 운동|n|A1|
spot|장소, 점, 얼룩|n|B1|
spot|발견하다, 알아채다|v|B2|
spotlight|스포트라이트, 주목|n|C1|
spouse|배우자|n|C1|
spray|분무액, 스프레이|n|C1|
spray|뿌리다, 분사하다|v|C1|
spread|확산, 전파|n|B2|
spread|펼치다, 퍼지다|v|B1|
spring|봄|n|A1|
spring|튀어 오르다, 솟아나다|v|B1|
squad|분대, 선수단, 반|n|C1|
square|정사각형의, 네모난|adj|A2|
square|정사각형, 광장|n|A2|
squeeze|짜내다, 압박하다|v|C1|
stab|찌르다, 상처를 입히다|v|C1|
stability|안정, 안정성|n|C1|
stabilize|안정시키다, 안정되다|v|C1|
stable|안정된, 견고한|adj|B2|
stadium|경기장, 스타디움|n|B1|
staff|직원, 교직원|n|B1|
stage|무대, 단계|n|A2|
stage|무대에 올리다, 기획하다|v|B2|
stair|계단|n|A2|
stake|지분, 이해관계, 말뚝|n|C1|
stall|가판대, 마구간|n|B2|
stamp|우표, 도장|n|A2|
stance|입장, 태도, 자세|n|B2|
stand|스탠드, 관람석, 가판대|n|B2|
stand|서다|v|A1|
standard|표준의, 일반적인|adj|B1|
standard|기준, 표준|n|B1|
star|별, 스타|n|A1|
star|주연을 맡다|v|A2|
stare|응시하다, 빤히 쳐다보다|v|B2|
stark|삭막한, 엄연한, 극명한|adj|C1|
start|시작, 출발|n|A2|
start|시작하다|v|A1|
start-up|초기의, 신생의|adj|C1|
start-up|신생 기업, 스타트업|n|C1|
state|국가의, 주립의|adj|B1|
state|상태, 국가, 주|n|A2|
state|진술하다, 명시하다|v|B1|
statement|진술, 말|n|A1|
station|역, 정거장|n|A1|
statistic|통계 자료, 수치|n|B1|
statistical|통계의, 통계상의|adj|C1|
statue|조각상, 동상|n|B1|
status|지위, 신분, 상태|n|B2|
stay|머무름, 체류|n|A2|
stay|머무르다, 머물다|v|A1|
steadily|꾸준히, 끊임없이|adv|B2|
steady|꾸준한, 지속적인|adj|B2|
steal|훔치다|v|A2|
steam|증기, 김|n|B2|
steel|강철, 철강|n|B2|
steep|가파른, 급격한|adj|B2|
steer|조종하다, 이끌다|v|C1|
stem|줄기, 어간|n|C1|
stem|막다, 저지하다, 비롯되다|v|C1|
step|걸음, 발걸음, 단계|n|A2|
step|발을 내딛다, 걸음을 옮기다, 밟다|v|B2|
stereotype|고정관념|n|C1|
stick|나뭇가지, 막대기|n|B1|
stick|찌르다, 붙이다|v|B1|
sticky|끈적거리는, 달라붙는|adj|B2|
still|가만히 있는, 고요한|adj|B1|
still|여전히, 아직도|adv|A1|
stimulate|자극하다, 촉진하다|v|B2|
stimulus|자극, 자극제|n|C1|
stir|휘젓다, 불러일으키다, 자극하다|v|C1|
stock|재고, 주식, 축적|n|B2|
stomach|위, 복부, 배|n|A2|
stone|돌, 돌멩이|n|A2|
stop|정류장, 멈춤|n|A1|
stop|멈추다, 그만두다|v|A1|
storage|저장, 보관소|n|C1|
store|가게, 상점|n|A1|
store|저장하다, 보관하다|v|B1|
storm|폭풍, 폭풍우|n|A2|
storm|몰아치다, 돌진하다|v|A2|
story|이야기|n|A1|
stove|가스레인지, 스토브|n|A2|
straight|곧은, 일직선의|adj|A2|
straight|곧장, 똑바로|adv|A2|
straightforward|직접적인, 솔직한, 수월한|adj|C1|
strain|부담, 압박, 긴장|n|C1|
strange|이상한, 낯선|adj|A2|
stranger|낯선 사람, 모르는 사람|n|B1|
strategic|전략적인|adj|C1|
strategy|전략, 계획|n|A2|
stream|개울, 시내, 연속|n|B2|
streaming|스트리밍, 연속 재생|n|C1|
street|거리, 도로|n|A1|
strength|힘, 체력, 강점|n|B1|
strengthen|강화하다, 강력해지다|v|B2|
stress|스트레스, 압박감|n|A2|
stress|강조하다, 스트레스를 주다/받다|v|A2|
stretch|구간, 뻗기, 스트레칭|n|B2|
stretch|늘이다, 뻗다|v|B2|
strict|엄격한, 엄한|adj|B2|
strictly|엄격히, 순전히|adv|B2|
strike|파업, 공습, 타격|n|B2|
strike|치다, 파업하다, 공격하다|v|B2|
striking|눈에 띄는, 두드러진|adj|C1|
string|줄, 끈|n|B1|
strip|가늘고 긴 조각|n|C1|
strip|벗기다, 뜯어내다, 박탈하다|v|C1|
strive|노력하다, 분투하다|v|C1|
stroke|뇌졸중, 타격, 젓기|n|B2|
strong|강한, 튼튼한|adj|A1|
strongly|강하게, 강력히|adv|B1|
structural|구조적인, 구조상의|adj|C1|
structure|구조, 구조물|n|A2|
structure|구조화하다, 체계화하다|v|B2|
struggle|투쟁, 고투, 발버둥|n|B2|
struggle|고투하다, 투쟁하다|v|B2|
student|학생|n|A1|
studio|작업실, 스튜디오|n|B1|
study|공부, 서재|n|A1|
study|공부하다|v|A1|
stuff|물건, 물질, 일|n|B1|
stuff|채워 넣다, 쑤셔 넣다|v|B2|
stumble|비틀거리다, 발이 걸리다|v|C1|
stun|기절시키다, 아연실색하게 하다|v|C1|
stunning|굉장히 아름다운, 매우 놀라운|adj|B2|
stupid|어리석은, 바보 같은|adj|A2|
style|스타일, 방식|n|A1|
subject|~의 지배를 받는, ~하기 쉬운|adj|B2|
subject|과목, 주제|n|A1|
submission|제출, 굴복|n|C1|
submit|제출하다, 굴복하다|v|B2|
subscribe|구독하다, 가입하다, 동의하다|v|C1|
subscriber|구독자, 가입자|n|C1|
subscription|구독, 가입비|n|C1|
subsequent|그 뒤의, 이어지는|adj|B2|
subsequently|그 후에, 이어서|adv|B2|
subsidy|보조금, 장려금|n|C1|
substance|물질, 실체|n|B1|
substantial|상당한, 실질적인|adj|C1|
substantially|상당히, 실질적으로|adv|C1|
substitute|대체품, 대리자|n|C1|
substitute|대체하다, 대신하다|v|C1|
substitution|대체, 치환|n|C1|
subtle|미묘한, 미세한|adj|C1|
suburb|교외, 근교|n|B2|
suburban|교외의|adj|C1|
subway|지하철|n|A2|
succeed|성공하다|v|A2|
success|성공|n|A1|
successful|성공적인|adj|A2|
successfully|성공적으로|adv|B1|
succession|연속, 계승, 승계|n|C1|
successive|연속적인, 잇따른|adj|C1|
successor|후임자, 계승자|n|C1|
such|그러한, 그런|det|A2|
such|그러한 사람, 그러한 것|pron|A2|
suck|빨아들이다, 삼키다|v|C1|
sudden|갑작스러운|adj|B1|
suddenly|갑자기|adv|A2|
sue|소송을 제기하다, 고소하다|v|C1|
suffer|고통받다, 겪다|v|B1|
suffering|고통, 괴로움|n|B2|
sufficient|충분한|adj|B2|
sugar|설탕|n|A1|
suggest|제안하다, 추천하다|v|A2|
suggestion|제안, 의견|n|A2|
suicide|자살|n|C1|
suit|정장, 양복|n|A2|
suit|어울리다, 적합하다|v|B1|
suitable|적합한, 어울리는|adj|B1|
suite|스위트룸, 모음곡, 세트|n|C1|
sum|총합, 합계, 액수|n|B2|
sum|합산하다, 요약하다|v|B2|
summarize|요약하다|v|B1|
summary|요약, 개요|n|B1|
summer|여름|n|A1|
summit|정상회담, 산꼭대기|n|C1|
sun|태양, 해|n|A1|
Sunday|일요일|n|A1|
sunny|화창한|adj|A1|
super|최고의, 대단한|adj|B2|
superb|최고의, 대단히 뛰어난|adj|C1|
superintendent|관리자, 교육감, 경찰서장|n|C1|
superior|우수한, 상관의, 우세한|adj|C1|
supermarket|슈퍼마켓|n|A1|
supervise|감독하다, 지도하다|v|C1|
supervision|감독, 관리|n|C1|
supervisor|감독관, 관리자|n|C1|
supplement|보충제, 보완, 추가물|n|C1|
supplement|보충하다, 추가하다|v|C1|
supply|공급, 보급품|n|B1|
supply|공급하다, 보급하다|v|B1|
support|지지, 지원, 후원|n|A2|
support|지지하다, 후원하다, 부양하다|v|A2|
supporter|지지자, 후원자, 팬|n|B1|
supportive|지원하는, 격려하는|adj|C1|
suppose|생각하다, 추정하다|v|A2|
supposedly|추정상, 아마도|adv|C1|
suppress|진압하다, 억제하다|v|C1|
sure|확신하는|adj|A1|
sure|물론, 확실히|adv|A2|
surely|분명히, 틀림없이|adv|B1|
surface|표면, 수면|n|B1|
surge|급증, 밀려듦|n|C1|
surge|급증하다, 쇄도하다|v|C1|
surgeon|외과의사|n|B2|
surgery|수술|n|B2|
surgical|수술의, 외과의|adj|C1|
surpass|능가하다, 뛰어넘다|v|C1|
surplus|흑자, 잉여, 과잉|n|C1|
surprise|놀라움, 뜻밖의 일|n|A2|
surprise|놀라게 하다|v|A2|
surprised|놀란|adj|A2|
surprising|놀라운|adj|A2|
surrender|항복하다, 굴복하다, 넘겨주다|v|C1|
surround|둘러싸다, 포위하다|v|B2|
surrounding|주위의, 주변의|adj|B2|
surveillance|감시, 망보기|n|C1|
survey|설문 조사|n|A2|
survey|조사하다, 측량하다|v|B2|
survival|생존|n|B2|
survive|살아남다, 생존하다|v|B1|
survivor|생존자|n|B2|
suspect|용의자|n|B2|
suspect|의심하다, 혐의를 두다|v|B2|
suspend|정직시키다, 유예하다, 매달다|v|B2|
suspension|정직, 유예, 정학, 중단|n|C1|
suspicion|의심, 혐의|n|C1|
suspicious|의심스러운, 수상쩍은|adj|C1|
sustain|유지하다, 지탱하다, 지속하다|v|C1|
sustainability|지속 가능성|n|C1|
sustainable|지속 가능한|adj|B2|
swallow|삼키다, 꿀꺽 마시다|v|B2|
swear|맹세하다, 욕을 하다|v|B2|
sweater|스웨터|n|A1|
sweep|쓸다, 휩쓸다|v|B2|
sweet|달콤한, 단|adj|A2|
sweet|단것, 사탕, 과자|n|A2|
swim|수영|n|B1|
swim|수영하다|v|A1|
swimming|수영|n|A1|
swing|스윙, 그네, 흔들기, 급변|n|C1|
swing|흔들다, 휘두르다|v|C1|
switch|전환, 스위치|n|B2|
switch|바꾸다, 전환하다|v|B1|
sword|칼, 검|n|C1|
symbol|상징, 기호|n|A2|
symbolic|상징적인|adj|C1|
sympathetic|동정적인, 공감하는|adj|B2|
sympathy|동정, 공감, 조의|n|B2|
symptom|증상, 징후|n|B1|
syndrome|증후군, 신드롬|n|C1|
system|체계, 시스템|n|A2|
systematic|체계적인, 조직적인|adj|C1|
T-shirt|티셔츠|n|A1|
table|탁자, 테이블|n|A1|
tablet|태블릿, 알약|n|A2|
tackle|태클, 맞붙음, 도구|n|C1|
tackle|다루다, 씨름하다, 태클하다|v|B2|
tactic|전술, 책략|n|C1|
tactical|전술적인, 작전의|adj|C1|
tag|꼬리표, 태그|n|B2|
tail|꼬리|n|B1|
take|가지고 가다, 타다, 걸리다|v|A1|
tale|이야기, 설화|n|B2|
talent|재능, 재주|n|B1|
talented|재능이 있는|adj|B1|
talk|대화, 이야기, 강연|n|A2|
talk|말하다, 이야기하다|v|A1|
tall|키가 큰|adj|A1|
tank|탱크, 대형 수조|n|B2|
tap|수도꼭지, 톡톡 두드림|n|B2|
tap|가볍게 두드리다, 탭하다|v|B2|
target|목표, 대상|n|A2|
target|겨냥하다, 목표로 삼다|v|B2|
task|과업, 과제, 일|n|A2|
taste|맛, 미각|n|A2|
taste|맛이 나다, 맛을 보다|v|A2|
tattoo|문신, 타투|n|B2|
tattoo|문신을 새기다|v|B2|
tax|세금|n|B1|
tax|과세하다, 세금을 부과하다|v|B1|
taxi|택시|n|A1|
taxpayer|납세자|n|C1|
tea|차, 홍차|n|A1|
teach|가르치다|v|A1|
teacher|교사, 선생님|n|A1|
teaching|가르치기, 교수, 교직|n|A2|
team|팀|n|A1|
tear|눈물|n|B2|
tear|찢어진 곳, 틈|n|B2|
tear|찢다, 뜯다|v|B2|
tease|놀리다, 괴롭히다|v|B2|
technical|기술적인, 전문적인|adj|B1|
technique|기술, 기법|n|B1|
technological|과학 기술의, 기술적인|adj|B2|
technology|기술|n|A2|
teen|십대의|adj|B2|
teen|십대, 청소년|n|B2|
teenage|십 대의|adj|A2|
teenager|십 대, 청소년|n|A1|
telephone|전화, 전화기|n|A1|
telephone|전화하다|v|A1|
television|텔레비전|n|A1|
tell|말하다, 알려주다|v|A1|
temperature|온도, 기온, 체온|n|A2|
temple|사원, 절, 관자놀이|n|B2|
temporarily|일시적으로, 임시로|adv|B2|
temporary|일시적인, 임시의|adj|B2|
tempt|유혹하다, 유도하다|v|C1|
ten|10, 열|num|A1|
tenant|세입자, 임차인|n|C1|
tend|~하는 경향이 있다|v|B1|
tendency|성향, 경향|n|B2|
tennis|테니스|n|A1|
tension|긴장, 긴장 상태|n|B2|
tent|텐트|n|B1|
tenure|재임 기간, 종신 재직권|n|C1|
term|용어, 학기, 기간|n|A2|
term|일컫다, 이름을 붙이다|v|B2|
terminal|말기의, 불치의, 종점의|adj|C1|
terminal|종착역, 터미널|n|B2|
terminate|종료하다, 끝내다, 해고하다|v|C1|
terms|조건, 조항, 관계|n|B2|
terrain|지형, 지역|n|C1|
terrible|끔찍한, 형편없는|adj|A1|
terribly|몹시, 대단히|adv|B2|
terrific|아주 멋진, 훌륭한|adj|C1|
terrify|겁나게 하다, 위협하다|v|B2|
territory|영토, 지역|n|B2|
terror|공포, 테러|n|B2|
terrorism|테러 행위, 테러리즘|n|B2|
terrorist|테러리스트|n|B2|
test|시험, 검사|n|A1|
test|시험하다, 검사하다|v|A1|
testify|증언하다, 입증하다|v|C1|
testimony|증언, 증거|n|C1|
testing|검사, 테스트|n|B2|
text|본문, 문자 메시지|n|A1|
text|문자를 보내다|v|A2|
textbook|교과서|n|B2|
texture|질감, 감촉|n|C1|
than|~보다|conj|A1|
thank|감사하다, 고마워하다|v|A1|
thankfully|감사하게도, 다행히도|adv|C1|
thanks|고마워요, 감사합니다|exclam|A1|
thanks|감사, 고마움|n|A1|
that|그 정도로, 그렇게|adv|B1|
that|~라는 것, ~하도록|conj|A1|
that|그, 저|det|A1|
that|그것, 저것|pron|A1|
the|그 (특정한 대상을 가리킬 때)|def. art.|A1|
theater|극장, 영화관|n|A1|
theft|절도, 도난|n|B2|
their|그들의|det|A1|
theirs|그들의 것|pron|B1|
them|그들을, 그들에게|pron|A1|
theme|주제, 테마|n|B1|
themselves|그들 자신|pron|A2|
then|그때, 그러고 나서, 그러면|adv|A1|
theoretical|이론적인|adj|C1|
theory|이론, 학설|n|B1|
therapist|치료사, 상담사|n|B2|
therapy|치료, 요법|n|B2|
there|거기에, 그곳으로|adv|A1|
thereafter|그 후에, 그 이래로|adv|C1|
thereby|그로 인해, 그렇게 함으로써|adv|C1|
therefore|그러므로, 따라서|adv|B1|
thesis|학위 논문, 명제|n|B2|
they|그들은, 그들이|pron|A1|
thick|두꺼운|adj|A2|
thief|도둑|n|A2|
thin|얇은, 마른|adj|A2|
thing|물건, 일, 것|n|A1|
think|생각하다|v|A1|
thinking|생각, 사고|n|A2|
third|3분의 1|n|A2|
third|세 번째|num|A1|
thirsty|목마른|adj|A1|
thirteen|13, 열셋|num|A1|
thirty|30, 서른|num|A1|
this|이 정도로, 이렇게|adv|B1|
this|이, 현재의|det|A1|
this|이것, 이 사람|pron|A1|
thorough|철저한, 완전한|adj|B2|
thoroughly|철저히, 완전히|adv|B2|
though|하지만, 그렇지만|adv|B1|
though|비록 ~이지만, ~에도 불구하고|conj|B1|
thought|생각, 사상|n|A2|
thoughtful|배려심 있는, 사려 깊은|adj|C1|
thousand|1,000, 천|num|A1|
thread|실, 맥락, 가닥|n|C1|
threat|위협, 협박|n|B2|
threaten|협박하다, 위협하다|v|B2|
three|3, 셋|num|A1|
threshold|문턱, 기준점, 한계점|n|C1|
thrilled|아주 흥분한, 대단히 신난|adj|C1|
thrive|번창하다, 잘 자라다|v|C1|
throat|목구멍, 목|n|B1|
through|지나서, 통과하여|adv|A1|
through|~을 통과하여, ~을 관통하여|prep|A1|
throughout|도처에, 내내|adv|B1|
throughout|~ 내내, ~ 곳곳에|prep|B1|
throw|던지다|v|A2|
thumb|엄지손가락|n|B2|
Thursday|목요일|n|A1|
thus|따라서, 그러므로|adv|B2|
ticket|표, 티켓|n|A1|
tide|조수, 밀물과 썰물, 조류|n|C1|
tie|넥타이, 끈|n|A2|
tie|묶다, 매다|v|A2|
tight|꽉 조이는, 빈틈없는|adj|B1|
tighten|조이다, 강화하다|v|C1|
till|~할 때까지|conj|B1|
till|~까지|prep|B1|
timber|목재, 수목|n|C1|
time|시간, 때|n|A1|
time|시간을 맞추다, 시간을 재다|v|B2|
timeline|연표, 일정표|n|B2|
timely|시기적절한, 때맞춘|adj|C1|
timing|시기, 타이밍|n|B2|
tiny|아주 작은|adj|B1|
tip|조언, 팁, 팁(봉사료)|n|A2|
tip|조언하다, 팁을 주다|v|B1|
tire|타이어|n|B1|
tired|피곤한|adj|A1|
tissue|(세포) 조직, 화장지|n|B2|
title|제목, 표제|n|A1|
title|제목을 붙이다, 칭호를 주다|v|B2|
to|~하는 것, ~하기 위해 (to 부정사)|INF|A1|
to|~로, ~에게|prep|A1|
tobacco|담배, 담뱃잎|n|C1|
today|오늘|adv|A1|
today|오늘|n|A1|
toe|발가락|n|B1|
together|함께, 같이|adv|A1|
toilet|변기, 화장실|n|A1|
tolerance|관용, 내성, 용인|n|C1|
tolerate|용인하다, 참다, 견디다|v|C1|
toll|사상자 수, 통행료, 대가|n|C1|
tomato|토마토|n|A1|
tomorrow|내일|adv|A1|
tomorrow|내일|n|A1|
ton|톤 (무게 단위), 많은 양|n|B1|
tone|어조, 음색, 분위기|n|B2|
tongue|혀|n|B1|
tonight|오늘 밤에|adv|A1|
tonight|오늘 밤|n|A1|
too|너무, 또한|adv|A1|
tool|도구, 연장|n|A2|
tooth|이, 치아|n|A1|
top|맨 위의, 최고의|adj|A2|
top|맨 위, 꼭대기, 정상|n|A2|
top|능가하다, 정상에 오르다|v|C1|
topic|주제, 화제|n|A1|
torture|고문, 심한 고통|n|C1|
torture|고문하다, 몹시 괴롭히다|v|C1|
toss|던지다, 뒤척이다|v|C1|
total|전체의, 완전한|adj|B1|
total|총계, 총액|n|B1|
total|총합이 ~에 달하다|v|C1|
totally|완전히, 전적으로|adv|B1|
touch|촉각, 접촉|n|B1|
touch|만지다, 닿다|v|A2|
tough|힘든, 거친, 단단한|adj|B2|
tour|관광, 여행, 견학|n|A2|
tour|여행하다, 순회하다|v|B1|
tourism|관광업, 관광|n|A2|
tourist|관광객|n|A1|
tournament|토너먼트, 승자 진출전|n|B2|
toward|~쪽으로, ~을 향하여|prep|A2|
towel|수건, 타월|n|A2|
tower|탑, 타워|n|A2|
town|마을, 도시|n|A1|
toxic|유독성의, 해로운|adj|C1|
toy|장난감의|adj|A2|
toy|장난감|n|A2|
trace|자취, 극미량, 흔적|n|C1|
trace|추적하다, 거슬러 올라가다|v|B2|
track|트랙, 주로, 철길|n|A2|
track|추적하다, 뒤쫓다|v|B2|
trade|무역, 거래|n|B1|
trade|거래하다, 교역하다|v|B1|
trademark|등록상표, 트레이드마크|n|C1|
trading|거래, 무역, 매매|n|B2|
tradition|전통|n|A2|
traditional|전통적인|adj|A2|
traffic|교통, 차량들|n|A1|
trafficking|불법 거래, 밀매|n|C1|
tragedy|비극, 참사|n|B2|
tragic|비극적인|adj|B2|
trail|오솔길, 자취, 흔적|n|C1|
trail|뒤처지다, 뒤쫓다, 끌리다|v|C1|
trailer|트레일러, 예고편|n|C1|
train|기차, 열차|n|A1|
train|훈련하다, 교육하다|v|A2|
trainer|트레이너, 훈련자|n|B1|
training|훈련, 교육|n|A2|
trait|특성, 특색|n|B2|
trans|트랜스젠더의, 횡단하는|adj|C1|
transaction|거래, 매매|n|C1|
transcript|성적 증명서, 기록록, 녹취록|n|C1|
transfer|이동, 이적, 이체|n|B2|
transfer|이동하다, 이체하다, 옮기다|v|B2|
transform|변형시키다, 탈바꿈시키다|v|B2|
transformation|변화, 변신, 변혁|n|C1|
transit|환승, 수송, 통과|n|C1|
transition|이행, 과도기, 변화|n|B2|
translate|번역하다, 통역하다|v|B1|
translation|번역, 통역|n|B1|
transmission|전송, 전파, 변속기|n|C1|
transmit|전송하다, 전파하다|v|B2|
transparency|투명성, 명확성|n|C1|
transparent|투명한, 명백한|adj|C1|
transport|수송하다, 운송하다|v|B1|
transportation|교통, 수송, 운송 수단|n|A2|
trap|덫, 함정|n|B2|
trap|가두다, 함정에 빠뜨리다|v|B2|
trash|쓰레기|n|A2|
trauma|외상, 정신적 충격|n|C1|
travel|여행|n|A1|
travel|여행하다|v|A1|
traveler|여행자, 여행객|n|A2|
treasure|보물|n|B2|
treat|대우하다, 치료하다, 다루다|v|B1|
treatment|치료, 대우, 처리|n|B1|
treaty|조약, 협정|n|C1|
tree|나무|n|A1|
tremendous|엄청난, 대단한|adj|C1|
trend|동향, 추세, 트렌드|n|B1|
trial|재판, 공판, 시련|n|B2|
tribal|부족의, 종족의|adj|C1|
tribe|부족, 종족|n|B2|
tribute|헌사, 찬사, 공물|n|C1|
trick|속임수, 묘기, 마술|n|B1|
trick|속이다|v|B1|
trigger|방아쇠, 도화선, 계기|n|C1|
trigger|유발하다, 촉발하다|v|B2|
trillion|1,000,000,000,000, 1조|num|B2|
trio|3인조, 트리오|n|C1|
trip|여행|n|A1|
trip|발을 헛디디다, 걸려 넘어지다|v|B2|
triumph|승리, 업적|n|C1|
troop|군대, 병력, 무리|n|B2|
trophy|트로피, 우승컵|n|C1|
tropical|열대의|adj|B2|
trouble|문제, 어려움, 곤란|n|A2|
trouble|괴롭히다, 문제를 일으키다|v|B2|
troubled|곤란을 겪는, 문제가 많은|adj|C1|
truck|트럭|n|A1|
truly|진심으로, 참으로|adv|B2|
trust|신뢰, 믿음|n|B2|
trust|신뢰하다, 믿다|v|B2|
trustee|수탁자, 신탁 관리자, 이사|n|C1|
truth|진실, 사실|n|B1|
try|시도, 노력|n|B2|
try|시도하다, 노력하다|v|A1|
tsunami|지진해일, 쓰나미|n|B2|
tube|관, 튜브|n|B1|
Tuesday|화요일|n|A1|
tuition|수업료, 등록금|n|C1|
tumor|종양|n|C1|
tune|곡조, 선율|n|B2|
tunnel|터널, 굴|n|B2|
turn|차례, 회전|n|A1|
turn|돌다, 회전하다|v|A1|
turnout|투표율, 참가자 수|n|C1|
turnover|이직률, 매출액|n|C1|
TV|텔레비전|n|A1|
twelve|12, 열둘|num|A1|
twenty|20, 스물|num|A1|
twice|두 번, 두 배로|adv|A1|
twin|쌍둥이의|adj|A2|
twin|쌍둥이 중 한 명|n|A2|
twist|비틀기, 전환, 반전|n|C1|
twist|비틀다, 왜곡하다|v|C1|
two|2, 둘|num|A1|
type|유형, 종류|n|A1|
type|타자 치다, 입력하다|v|B1|
typical|전형적인|adj|A2|
typically|전형적으로, 일반적으로|adv|B1|
ugly|못생긴, 추한|adj|B1|
ultimate|궁극적인, 최후의|adj|B2|
ultimately|궁극적으로, 결국|adv|B2|
umbrella|우산|n|A1|
unable|~할 수 없는|adj|B1|
unacceptable|받아들일 수 없는, 용납할 수 없는|adj|B2|
uncertainty|불확실성|n|B2|
uncle|삼촌, 외삼촌, 고모부/이모부|n|A1|
uncomfortable|불편한, 거북한|adj|B1|
unconscious|의식을 잃은, 무의식적인|adj|B2|
unconstitutional|위헌의|adj|C1|
under|아래에|adv|A1|
under|~의 아래에|prep|A1|
undergo|겪다, 받다|v|B2|
underground|지하의|adj|A2|
underground|지하에, 땅속으로|adv|A2|
underlying|근본적인, 기저에 있는|adj|C1|
undermine|약화시키다, 훼손하다|v|C1|
understand|이해하다|v|A1|
understanding|이해, 지식|n|A2|
undertake|착수하다, 떠맡다|v|B2|
underwear|속옷|n|B1|
undoubtedly|의심할 여지 없이, 확실히|adv|C1|
unemployed|실업 상태인, 실직한|adj|B1|
unemployment|실업, 실직|n|B1|
unexpected|예상치 못한, 뜻밖의|adj|B2|
unfair|불공평한, 부당한|adj|B1|
unfold|펼쳐지다, 밝혀지다|v|B2|
unfortunate|불운한, 유감스러운|adj|B2|
unfortunately|불행하게도, 안타깝게도|adv|A2|
unhappy|불행한, 슬픈|adj|A2|
uniform|제복, 유니폼|n|A2|
unify|통합하다, 통일하다|v|C1|
union|조합, 노조, 결합|n|B1|
unique|고유한, 독특한|adj|B2|
unit|단위, 단원|n|A2|
unite|단결하다, 통합하다|v|B2|
united|연합된, 통합된|adj|A2|
unity|통합, 통일|n|B2|
universal|보편적인, 전 세계의|adj|B2|
universe|우주, 전 세계|n|B2|
university|대학교|n|A1|
unknown|알려지지 않은, 미지의|adj|B2|
unless|~하지 않는 한, ~이 아닌 한|conj|B1|
unlike|~와 달리|prep|B1|
unlikely|~할 것 같지 않은|adj|B1|
unnecessary|불필요한|adj|B1|
unpleasant|불쾌한, 불편한|adj|B1|
unprecedented|전례 없는, 유례없는|adj|C1|
until|~할 때까지|conj|A1|
until|~할 때까지|prep|A1|
unusual|특이한, 흔치 않은|adj|A2|
unveil|공개하다, 베일을 벗기다|v|C1|
up|위로, 위에|adv|A1|
up|~을 따라 위로|prep|A1|
upcoming|다가오는, 곧 있을|adj|C1|
update|업데이트, 최신 정보|n|B1|
update|갱신하다, 최신 상태로 만들다|v|B1|
upgrade|업그레이드, 개선품|n|C1|
upgrade|향상시키다, 승급시키다|v|C1|
uphold|유지하다, 옹호하다|v|C1|
upon|~하자마자, ~의 위에|prep|B1|
upper|위쪽의, 상위의|adj|B2|
upset|속상한, 마음이 상한|adj|B1|
upset|속상하게 하다, 뒤엎다|v|B1|
upstairs|위층의|adj|A2|
upstairs|위층으로, 위층에|adv|A1|
upward|위쪽으로, 상향하여|adv|B2|
urban|도시의|adj|B2|
urge|촉구하다, 강력히 권고하다|v|B2|
urgent|긴급한, 시급한|adj|C1|
us|우리를, 우리에게|pron|A1|
usage|사용량, 용법|n|B2|
use|사용, 이용|n|A2|
use|사용하다|v|A1|
used|중고의, 사용된|adj|B1|
used to|~에 익숙한|adj|B1|
used to|~하곤 했다, 예전에는 ~이었다|modal v|A2|
useful|유용한, 쓸모 있는|adj|A1|
useless|쓸모없는, 효과 없는|adj|B2|
user|사용자, 이용자|n|A2|
usual|평소의, 보통의|adj|A2|
usually|보통, 대개|adv|A1|
utility|공공요금, 유용성, 효용|n|C1|
utilize|활용하다, 이용하다|v|C1|
utterly|완전히, 아주|adv|C1|
vacation|휴가, 방학|n|A1|
vaccinate|예방 접종을 하다|v|B2|
vaccination|예방 접종|n|B2|
vaccine|백신|n|B2|
vacuum|진공, 공백|n|C1|
vague|모호한, 애매한|adj|C1|
valid|유효한, 타당한|adj|B2|
valley|계곡, 골짜기|n|A2|
valuable|귀중한, 가치 있는|adj|B1|
value|가치, 가격|n|B1|
value|소중히 여기다, 가치를 평가하다|v|B2|
van|밴, 승합차|n|B2|
vanish|사라지다, 소멸하다|v|C1|
variable|변동이 심한, 가변적인|adj|C1|
variable|변수, 변형|n|C1|
variation|변화, 변형, 변이|n|B2|
varied|다양한, 다채로운|adj|C1|
variety|다양성, 여러 가지|n|A2|
various|다양한, 여러 가지의|adj|B1|
vary|다양하다, 달라지다|v|B2|
vast|광대한, 방대한|adj|B2|
vegan|비건의, 완전 채식의|adj|C1|
vegan|비건, 완전 채식주의자|n|C1|
vegetable|채소, 야채|n|A1|
vehicle|탈것, 차량|n|A2|
vein|정맥, 혈관, 기질|n|C1|
venture|모험, 벤처 사업|n|C1|
venture|위험을 무릅쓰고 가다, 과감히 시도하다|v|C1|
venue|장소, 개최지|n|B2|
verbal|구두의, 말로 하는|adj|C1|
verdict|평결, 판결|n|C1|
verify|확인하다, 입증하다|v|C1|
verse|시의 연, 구절|n|C1|
version|판, 버전|n|B1|
versus|~ 대, ~와 대비하여|conj|C1|
vertical|수직의, 세로의|adj|B2|
very|바로 그, 매우|adj|B2|
very|매우, 아주|adv|A1|
vessel|선박, 혈관, 그릇|n|C1|
veteran|베테랑, 퇴역 군인|n|C1|
via|~을 경유하여, ~을 통해|prep|B2|
viable|실행 가능한, 생존 가능한|adj|C1|
vibrant|활기찬, 생생한|adj|C1|
vice|악덕, 결함, 비행|n|C1|
vicious|잔인한, 사악한, 지독한|adj|C1|
victim|피해자, 희생자|n|B1|
victory|승리|n|B2|
video|동영상, 비디오|n|A1|
view|경치, 시야, 견해|n|A2|
view|바라보다, 여기다|v|B1|
viewer|시청자, 보는 사람|n|B1|
viewpoint|관점, 시각|n|B2|
village|마을, 시골|n|A2|
villain|악당, 악역|n|B2|
violate|위반하다, 침해하다|v|C1|
violation|위반, 침해|n|C1|
violence|폭력, 폭력성|n|B2|
violent|폭력적인, 격렬한|adj|B1|
viral|바이러스의, 바이러스성의, 입소문의|adj|C1|
virtual|가상의, 사실상의|adj|B2|
virtue|미덕, 덕목, 장점|n|C1|
virus|바이러스|n|A2|
visa|비자, 사증|n|B2|
visible|보이는, 눈에 띄는|adj|B2|
vision|비전, 미래상, 시력|n|B2|
visit|방문|n|A1|
visit|방문하다|v|A1|
visitor|방문객, 손님|n|A1|
visual|시각의, 눈에 보이는|adj|B2|
vital|필수적인, 극히 중요한|adj|B2|
vitamin|비타민|n|B2|
vocal|목소리를 높이는, 발성의|adj|C1|
voice|목소리, 음성|n|A2|
volume|부피, 용량, 음량|n|B2|
voluntary|자발적인, 자원의|adj|B2|
volunteer|자원봉사자|n|B1|
volunteer|자원하다, 지원하다|v|B1|
vote|투표, 표|n|B1|
vote|투표하다|v|B1|
voting|투표|n|B2|
vow|맹세하다, 서약하다|v|C1|
vulnerability|취약성, 상처받기 쉬움|n|C1|
vulnerable|취약한, 상처받기 쉬운|adj|C1|
wage|임금, 급료|n|B2|
wait|기다림, 대기|n|A2|
wait|기다리다|v|A1|
waiter|웨이터, 종업원|n|A1|
wake|깨어나다, 깨우다|v|A1|
walk|산책, 걷기|n|A1|
walk|걷다|v|A1|
wall|벽, 담|n|A1|
wander|돌아다니다, 방황하다|v|B2|
want|원하다|v|A1|
war|전쟁|n|A2|
ward|병동, 구 (행정구역), 피보호자|n|C1|
warehouse|창고, 물류창고|n|C1|
warfare|전쟁, 전투 행위|n|C1|
warm|따뜻한|adj|A1|
warm|따뜻하게 하다|v|B1|
warming|온난화|n|B2|
warn|경고하다, 주의를 주다|v|B1|
warning|경고, 주의|n|B1|
warrant|영장, 보증서, 근거|n|C1|
warrant|정당화하다, 보증하다|v|C1|
warrior|전사, 투사|n|C1|
wash|세탁, 씻기|n|A2|
wash|씻다, 빨래하다|v|A1|
washing|세탁, 빨래|n|A2|
waste|폐기된, 쓸모없는|adj|B1|
waste|낭비, 폐기물, 쓰레기|n|B1|
waste|낭비하다|v|B1|
watch|손목시계|n|A1|
watch|보다, 지켜보다|v|A1|
water|물|n|A1|
water|물을 주다|v|B1|
wave|파도, 물결|n|A2|
wave|흔들다, 손짓하다|v|B1|
way|훨씬, 아주 멀리|adv|B2|
way|길, 방법|n|A1|
we|우리는, 우리가|pron|A1|
weak|약한, 힘없는|adj|A2|
weaken|약화시키다, 약해지다|v|C1|
weakness|약점, 약함|n|B2|
wealth|부, 재산|n|B2|
wealthy|부유한, 재산이 많은|adj|B2|
weapon|무기|n|B1|
wear|입다, 착용하다|v|A1|
weather|날씨|n|A1|
weave|짜다, 엮다, 만들어내다|v|C1|
web|웹, 거미줄|n|A2|
website|웹사이트|n|A1|
wedding|결혼식, 혼례|n|A2|
Wednesday|수요일|n|A1|
weed|잡초, 대마초|n|C1|
week|주, 일주일|n|A1|
weekend|주말|n|A1|
weekly|매주의, 주간의|adj|B2|
weigh|무게를 달다, 무게가 나가다|v|B1|
weight|무게, 체중|n|A2|
weird|기묘한, 이상한|adj|B2|
welcome|반가운, 환영받는|adj|A1|
welcome|천만에요, 환영해요|exclam|A1|
welcome|환영|n|A2|
welcome|환영하다, 맞이하다|v|A1|
welfare|복지, 후생|n|B2|
well|건강한, 좋은|adj|A1|
well|잘, 좋게|adv|A1|
well|글쎄, 저|exclam|A1|
well|우물, 원천|n|C1|
well-being|복지, 행복, 안녕|n|B2|
west|서쪽의|adj|A1|
west|서쪽으로|adv|A1|
west|서쪽|n|A1|
western|서쪽의, 서부의|adj|B1|
wet|젖은|adj|A2|
what|무슨, 어떤|det|A1|
what|무엇, 무슨 일|pron|A1|
whatever|어떤 ~이든, 무슨 ~이든|det|B1|
whatever|무엇이든, 어떤 것이든|pron|B1|
whatsoever|전혀, 어떤 것도|adv|C1|
wheat|밀, 소맥|n|B2|
wheel|바퀴|n|A2|
when|언제|adv|A1|
when|~할 때|conj|A1|
when|그때|pron|A1|
whenever|~할 때마다, 언제든 ~할 때|conj|B1|
where|어디에, 어디로|adv|A1|
where|~하는 곳에|conj|A1|
whereas|반면에, ~임에 비하여|conj|B2|
wherever|어디든지, 어디에 있든|conj|B2|
whether|~인지 아닌지|conj|B1|
which|어느, 어떤|det|A1|
which|어느 쪽, 어느 것|pron|A1|
while|~하는 동안에, 반면에|conj|A2|
while|잠깐, 잠시|n|B1|
whip|채찍질하다, 빠르게 움직이다|v|C1|
whisper|속삭임, 귓속말|n|B2|
whisper|속삭이다, 귓속말하다|v|B2|
white|흰, 하얀색의|adj|A1|
white|흰색|n|A1|
who|누구|pron|A1|
whoever|누구든, 누구든지|pron|B2|
whole|전체의, 모든|adj|A2|
whole|전체, 전부|n|B1|
wholly|전적으로, 완전히|adv|C1|
whom|누구를, 누구에게|pron|B2|
whose|누구의|det|A2|
whose|누구의 것|pron|A2|
why|왜, 어째서|adv|A1|
Wi-Fi|와이파이|n|B1|
wide|넓은|adj|A2|
widely|널리, 대대적으로|adv|B2|
widen|넓히다, 넓어지다|v|C1|
widespread|널리 퍼진, 광범위한|adj|B2|
widow|과부, 미망인|n|C1|
width|폭, 너비|n|C1|
wife|아내, 부인|n|A1|
wild|야생의|adj|A2|
wildfire|산불|n|C1|
wildlife|야생 동물|n|B2|
will|~할 것이다|modal v|A1|
will|의지, 유언장|n|B1|
willing|기꺼이 ~하는, 꺼리지 않는|adj|B2|
willingness|의지, 기꺼이 하는 마음|n|C1|
win|승리|n|B1|
win|이기다|v|A1|
wind|바람|n|A2|
wind|감다, 구부러지다|v|B2|
window|창문|n|A1|
wine|와인, 포도주|n|A1|
wing|날개|n|B1|
winner|승리자, 우승자|n|A2|
winter|겨울|n|A1|
wipe|닦다, 훔치다|v|C1|
wire|철사, 전선|n|B2|
wisdom|지혜, 슬기|n|B2|
wise|지혜로운, 현명한|adj|B2|
wish|소원, 바람|n|A2|
wish|바라다, 원하다|v|A2|
wit|기지, 재치|n|C1|
with|~와 함께, ~을 가지고|prep|A1|
withdraw|철회하다, 인출하다, 물러나다|v|B2|
withdrawal|철회, 인출, 탈퇴|n|C1|
within|~ 이내에, ~ 안에|prep|B1|
without|~ 없이|prep|A1|
witness|목격자, 증인|n|B2|
witness|목격하다, 증언하다|v|B2|
wolf|늑대|n|B2|
woman|여성, 여자|n|A1|
wonder|경이로움, 놀라움|n|B1|
wonder|궁금해하다, 경탄하다|v|B1|
wonderful|아주 멋진, 훌륭한|adj|A1|
wood|나무, 목재|n|A2|
wooden|나무로 만든, 목재의|adj|A2|
wool|양모, 털실|n|B1|
word|단어, 낱말|n|A1|
work|일, 직장|n|A1|
work|일하다, 작동하다|v|A1|
worker|근로자, 일하는 사람|n|A1|
workforce|노동 인구, 전 종업원|n|B2|
working|일하는, 근로의|adj|A2|
workout|운동, 훈련|n|C1|
workplace|직장, 일터|n|B2|
workshop|워크숍, 연수, 작업장|n|B2|
world|세계, 세상|n|A1|
worldwide|전 세계적인|adj|B1|
worldwide|전 세계적으로|adv|B1|
worm|벌레, 지렁이|n|B2|
worried|걱정하는, 불안해하는|adj|A2|
worry|걱정거리, 걱정|n|B1|
worry|걱정하다, 걱정시키다|v|A2|
worse|더 나쁜, 더 못한|adj|A2|
worse|더 나쁘게, 더 심하게|adv|B1|
worse|더 나쁜 것|n|B2|
worship|예배, 숭배|n|C1|
worship|예배하다, 숭배하다|v|C1|
worst|가장 나쁜, 최악의|adj|A2|
worst|가장 나쁘게, 최악으로|adv|B1|
worst|최악의 것|n|B2|
worth|~의 가치가 있는|adj|B1|
worth|가치|n|B2|
worthwhile|가치 있는, 보람 있는|adj|C1|
worthy|가치 있는, 자격이 있는|adj|C1|
would|~할 것이다, ~하곤 했다|modal v|A1|
wound|상처, 부상|n|B2|
wound|상처를 입히다, 부상을 입히다|v|B2|
wow|와, 우와|exclam|A2|
wrap|싸다, 포장하다|v|B2|
wrist|손목|n|B2|
write|쓰다|v|A1|
writer|작가|n|A1|
writing|글쓰기, 글|n|A1|
written|서면의, 글의|adj|B1|
wrong|틀린, 잘못된|adj|A1|
wrong|틀리게, 잘못되어|adv|B1|
wrong|잘못, 틀린 것|n|B2|
yard|마당, 야드 (길이 단위)|n|A1|
yeah|응, 그래|exclam|A1|
year|해, 년|n|A1|
yell|소리치다, 악을 쓰다|v|C1|
yellow|노란, 노란색의|adj|A1|
yellow|노란색|n|A1|
yes|네, 맞아요|exclam|A1|
yesterday|어제|adv|A1|
yesterday|어제|n|A1|
yet|아직, 이미|adv|A2|
yet|그렇지만, 그런데도|conj|B2|
yield|수확량, 산출량, 수익률|n|C1|
yield|산출하다, 양보하다, 굴복하다|v|C1|
you|너는, 너희는, 너를|pron|A1|
young|어린, 젊은|adj|A1|
young|젊은이들, 청년들|n|B1|
your|너의, 당신의|det|A1|
yours|너의 것, 너희들의 것|pron|A2|
yourself|너 자신, 당신 자신|pron|A1|
youth|젊음, 청춘, 청소년기|n|B1|
zero|0, 영|num|A2|
zone|구역, 지대|n|B2|
false|틀린, 거짓의|adj|A1|
true|참인, 진짜의|adj|A1|
`;
