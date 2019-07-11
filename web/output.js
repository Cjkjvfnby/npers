(function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var clear = Kotlin.kotlin.dom.clear_asww5s$;
  var Unit = Kotlin.kotlin.Unit;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var a = $module$kotlinx_html_js.kotlinx.html.a_gu26kr$;
  var footer = $module$kotlinx_html_js.kotlinx.html.footer_x2k50h$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var p = $module$kotlinx_html_js.kotlinx.html.p_8pggrc$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var label = $module$kotlinx_html_js.kotlinx.html.label_yd75js$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var input = $module$kotlinx_html_js.kotlinx.html.input_e1g74z$;
  var throwCCE = Kotlin.throwCCE;
  var button = $module$kotlinx_html_js.kotlinx.html.button_i4xb7r$;
  var form = $module$kotlinx_html_js.kotlinx.html.form_3ereno$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var Pair = Kotlin.kotlin.Pair;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  Intro.prototype = Object.create(Frame.prototype);
  Intro.prototype.constructor = Intro;
  TextQuestion.prototype = Object.create(Frame.prototype);
  TextQuestion.prototype.constructor = TextQuestion;
  CheckQuestion.prototype = Object.create(Frame.prototype);
  CheckQuestion.prototype.constructor = CheckQuestion;
  Finish.prototype = Object.create(Frame.prototype);
  Finish.prototype.constructor = Finish;
  function complexAndScientificAnalysisOfTheResponseCombination(result) {
    var tmp$;
    var name = result.get_za3lpa$(1);
    if (isBlank(name)) {
      tmp$ = 'Eugene';
    }
     else {
      tmp$ = name;
    }
    var personality = tmp$;
    return 'Your personality is: ' + personality;
  }
  function Main() {
    this.appendPoint_0 = null;
    this.answerChoices_0 = listOf(['Accurate', 'Neutral', 'Inaccurate']);
    this.resultContainer_0 = ArrayList_init();
    this.framesIterator_0 = listOf([new Intro('Find, which of N personalities you are! ONLINE THERAPY THAT TRULY WORKS!'), new TextQuestion('My name is (Choose wisely)'), new CheckQuestion('I will split last piece of cake on the table', this.answerChoices_0), new CheckQuestion('I like my board scram and agile', this.answerChoices_0), new CheckQuestion('I sympathize with the scopeless', this.answerChoices_0), new CheckQuestion('I have trouble controlling my build', this.answerChoices_0), new CheckQuestion('I believe in the importance of tests', this.answerChoices_0), new CheckQuestion('I enjoy code reviews', this.answerChoices_0), new Finish(Main$framesIterator$lambda(this))]).iterator();
    var around = div_0(get_create(document), 'd-flex align-items-center h-100 bg-secondary', Main_init$lambda);
    var footer_0 = footer(get_create(document), 'bg-secondary text-white-50', Main_init$lambda_0);
    ensureNotNull(document.body).append(around);
    ensureNotNull(document.body).append(footer_0);
    this.appendPoint_0 = ensureNotNull(document.getElementById('appendPoint'));
  }
  function Main$next$lambda(this$Main) {
    return function (it) {
      this$Main.resultContainer_0.add_11rb$(it);
      this$Main.next();
      return Unit;
    };
  }
  Main.prototype.next = function () {
    if (!this.framesIterator_0.hasNext()) {
      return;
    }
    clear(this.appendPoint_0);
    this.appendPoint_0.append(this.framesIterator_0.next().getHtml_ep0k5p$(Main$next$lambda(this)));
  };
  function Main$framesIterator$lambda(this$Main) {
    return function () {
      return complexAndScientificAnalysisOfTheResponseCombination(this$Main.resultContainer_0);
    };
  }
  function Main_init$lambda$lambda$lambda$lambda($receiver) {
    var $receiver_0 = $receiver.attributes;
    var value = 'appendPoint';
    $receiver_0.put_xwzc9p$('id', value);
    return Unit;
  }
  function Main_init$lambda$lambda$lambda($receiver) {
    div($receiver, 'col mx-auto w-50 p-3 text-center', Main_init$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function Main_init$lambda$lambda($receiver) {
    div($receiver, 'row align-items-center', Main_init$lambda$lambda$lambda);
    return Unit;
  }
  function Main_init$lambda($receiver) {
    div($receiver, 'container h-50 bg-light d-flex align-items-center justify-content-center', Main_init$lambda$lambda);
    return Unit;
  }
  function Main_init$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('GitHub link');
    return Unit;
  }
  function Main_init$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('\xA9 20NN Copyright: ');
    a($receiver, 'https://github.com/cjkjvfnby/npers', void 0, void 0, Main_init$lambda$lambda$lambda_0);
    return Unit;
  }
  function Main_init$lambda_0($receiver) {
    div($receiver, 'container text-center ', Main_init$lambda$lambda_0);
    return Unit;
  }
  Main.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Main',
    interfaces: []
  };
  function main$lambda(it) {
    (new Main()).next();
    return Unit;
  }
  function main() {
    window.onload = main$lambda;
  }
  function Frame() {
    this.submit = 'Submit';
  }
  Frame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Frame',
    interfaces: []
  };
  function Intro(text) {
    Frame.call(this);
    this.text_0 = text;
  }
  function Intro$getHtml$lambda$lambda(this$Intro) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(this$Intro.text_0);
      return Unit;
    };
  }
  function Intro$getHtml$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Click me to continue.');
    return Unit;
  }
  function Intro$getHtml$lambda$lambda_1(closure$callback) {
    return function (it) {
      closure$callback('Started');
      return Unit;
    };
  }
  function Intro$getHtml$lambda(this$Intro, closure$callback) {
    return function ($receiver) {
      p($receiver, void 0, Intro$getHtml$lambda$lambda(this$Intro));
      p($receiver, 'font-weight-lighter small', Intro$getHtml$lambda$lambda_0);
      set_onClickFunction($receiver, Intro$getHtml$lambda$lambda_1(closure$callback));
      return Unit;
    };
  }
  Intro.prototype.getHtml_ep0k5p$ = function (callback) {
    return div_0(get_create(document), void 0, Intro$getHtml$lambda(this, callback));
  };
  Intro.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Intro',
    interfaces: [Frame]
  };
  function TextQuestion(question) {
    Frame.call(this);
    this.question_0 = question;
    this.inputId_0 = 'goga';
  }
  function TextQuestion$getHtml$lambda$lambda$lambda(this$TextQuestion) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(this$TextQuestion.question_0);
      return Unit;
    };
  }
  function TextQuestion$getHtml$lambda$lambda$lambda_0(this$TextQuestion) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var value = this$TextQuestion.inputId_0;
      $receiver_0.put_xwzc9p$('id', value);
      return Unit;
    };
  }
  function TextQuestion$getHtml$lambda$lambda$lambda$lambda(this$TextQuestion, closure$callback) {
    return function (it) {
      var tmp$;
      var input = Kotlin.isType(tmp$ = document.getElementById(this$TextQuestion.inputId_0), HTMLInputElement) ? tmp$ : throwCCE();
      closure$callback(input.value);
      return Unit;
    };
  }
  function TextQuestion$getHtml$lambda$lambda$lambda_1(this$TextQuestion, closure$callback) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(this$TextQuestion.submit);
      set_onClickFunction($receiver, TextQuestion$getHtml$lambda$lambda$lambda$lambda(this$TextQuestion, closure$callback));
      return Unit;
    };
  }
  function TextQuestion$getHtml$lambda$lambda(this$TextQuestion, closure$callback) {
    return function ($receiver) {
      label($receiver, 'font-weight-bold', TextQuestion$getHtml$lambda$lambda$lambda(this$TextQuestion));
      input($receiver, InputType.text, void 0, void 0, void 0, 'form-control', TextQuestion$getHtml$lambda$lambda$lambda_0(this$TextQuestion));
      button($receiver, void 0, void 0, void 0, void 0, 'form-control', TextQuestion$getHtml$lambda$lambda$lambda_1(this$TextQuestion, closure$callback));
      return Unit;
    };
  }
  function TextQuestion$getHtml$lambda(this$TextQuestion, closure$callback) {
    return function ($receiver) {
      div($receiver, 'form-group', TextQuestion$getHtml$lambda$lambda(this$TextQuestion, closure$callback));
      return Unit;
    };
  }
  TextQuestion.prototype.getHtml_ep0k5p$ = function (callback) {
    return form(get_create(document), void 0, void 0, void 0, void 0, TextQuestion$getHtml$lambda(this, callback));
  };
  TextQuestion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextQuestion',
    interfaces: [Frame]
  };
  function CheckQuestion(question, items) {
    Frame.call(this);
    this.question_0 = question;
    this.items_0 = items;
  }
  function CheckQuestion$getHtml$lambda$lambda(this$CheckQuestion) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(this$CheckQuestion.question_0);
      return Unit;
    };
  }
  function CheckQuestion$getHtml$lambda$lambda$lambda(closure$item) {
    return function ($receiver) {
      set_id($receiver, closure$item);
      return Unit;
    };
  }
  function CheckQuestion$getHtml$lambda$lambda$lambda_0(closure$item) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$item);
      return Unit;
    };
  }
  function CheckQuestion$getHtml$lambda$lambda_0(closure$item) {
    return function ($receiver) {
      input($receiver, InputType.checkBox, void 0, void 0, void 0, 'form-check-input', CheckQuestion$getHtml$lambda$lambda$lambda(closure$item));
      label($receiver, 'form-check-label', CheckQuestion$getHtml$lambda$lambda$lambda_0(closure$item));
      return Unit;
    };
  }
  function CheckQuestion$getHtml$lambda$lambda$lambda$lambda(it) {
    return it.first;
  }
  function CheckQuestion$getHtml$lambda$lambda$lambda_1(closure$callback, this$CheckQuestion) {
    return function (it) {
      var tmp$ = closure$callback;
      var $receiver = this$CheckQuestion.items_0;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        var tmp$_1;
        destination.add_11rb$(new Pair(item, Kotlin.isType(tmp$_1 = document.getElementById(item), HTMLInputElement) ? tmp$_1 : throwCCE()));
      }
      var destination_0 = ArrayList_init();
      var tmp$_2;
      tmp$_2 = destination.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        if (element.second.checked)
          destination_0.add_11rb$(element);
      }
      tmp$(joinToString(destination_0, ',', void 0, void 0, void 0, void 0, CheckQuestion$getHtml$lambda$lambda$lambda$lambda));
      return Unit;
    };
  }
  function CheckQuestion$getHtml$lambda$lambda_1(this$CheckQuestion, closure$callback) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(this$CheckQuestion.submit);
      set_onClickFunction($receiver, CheckQuestion$getHtml$lambda$lambda$lambda_1(closure$callback, this$CheckQuestion));
      return Unit;
    };
  }
  function CheckQuestion$getHtml$lambda(this$CheckQuestion, closure$callback) {
    return function ($receiver) {
      var tmp$;
      label($receiver, 'font-weight-bold', CheckQuestion$getHtml$lambda$lambda(this$CheckQuestion));
      tmp$ = this$CheckQuestion.items_0.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        div($receiver, 'form-check text-left', CheckQuestion$getHtml$lambda$lambda_0(item));
      }
      button($receiver, void 0, void 0, void 0, void 0, 'form-control', CheckQuestion$getHtml$lambda$lambda_1(this$CheckQuestion, closure$callback));
      return Unit;
    };
  }
  CheckQuestion.prototype.getHtml_ep0k5p$ = function (callback) {
    return form(get_create(document), void 0, void 0, void 0, void 0, CheckQuestion$getHtml$lambda(this, callback));
  };
  CheckQuestion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CheckQuestion',
    interfaces: [Frame]
  };
  function Finish(processResult) {
    Frame.call(this);
    this.processResult = processResult;
  }
  function Finish$getHtml$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Thank you. It will change your life.');
    return Unit;
  }
  function Finish$getHtml$lambda$lambda_0(this$Finish) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(this$Finish.processResult());
      return Unit;
    };
  }
  function Finish$getHtml$lambda$lambda$lambda($receiver) {
    $receiver.href = 'https://github.com/Cjkjvfnby/npers/blob/master/src/main/kotlin/analysis.kt';
    $receiver.unaryPlus_pdl1vz$('Your responses are very important to us.');
    return Unit;
  }
  function Finish$getHtml$lambda$lambda_1($receiver) {
    a($receiver, void 0, void 0, void 0, Finish$getHtml$lambda$lambda$lambda);
    return Unit;
  }
  function Finish$getHtml$lambda(this$Finish) {
    return function ($receiver) {
      p($receiver, void 0, Finish$getHtml$lambda$lambda);
      p($receiver, 'lead text-primary font-weight-bold', Finish$getHtml$lambda$lambda_0(this$Finish));
      p($receiver, 'font-weight-light small', Finish$getHtml$lambda$lambda_1);
      return Unit;
    };
  }
  Finish.prototype.getHtml_ep0k5p$ = function (callback) {
    return div_0(get_create(document), void 0, Finish$getHtml$lambda(this));
  };
  Finish.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Finish',
    interfaces: [Frame]
  };
  _.complexAndScientificAnalysisOfTheResponseCombination_mhpeer$ = complexAndScientificAnalysisOfTheResponseCombination;
  _.Main = Main;
  _.main = main;
  _.Frame = Frame;
  _.Intro = Intro;
  _.TextQuestion = TextQuestion;
  _.CheckQuestion = CheckQuestion;
  _.Finish = Finish;
  main();
  Kotlin.defineModule('output', _);
  return _;
}(module.exports, require('kotlin'), require('kotlinx-html-js')));

//# sourceMappingURL=output.js.map
