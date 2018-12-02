module.exports = {
  navbar: {
    net: 'Choose Network:',
    register: 'Sign Up',
    login: 'Sign In',
    language: 'Choose Language',
    mainNet: 'Main Net',
    testNet: 'Test Net',
    cnName: 'CN',
    enName: 'EN',
    exit: 'Sign out',
    returnToPrjectList: 'Return to project list',
    toSetting: 'Personal Setting',
    help: 'Help',
    tutorial: 'Tutorial',
    feedback: 'Feedback',
    about: 'About us',
    references: 'References',
    version: 'Trial Version',
    introduce: 'One-stop ide for smart contract',
    support:'Support',
    lang:'EN',
    project:'Project'
  },
  language:{
    name:'CN'
  },
  home: {
    mainTxt: '-------------Log in by the following account.-------------',
    login: 'Click here to sign in',
    register: 'Sign up ONTID',
    smartXInfo_1:'One-stop ',
    smartXInfo_green:'IDE',
    smartXInfo_2:' for smart contract on Ontology',
  },
  register: {
    register: 'Sign up an ONT ID',
    generate: 'Create a New ONT ID',
    recovery: 'Recover your ONT ID',
    enterPassword: 'Enter password',
    enterPasswordAgain: 'Repeat Password',
    waiting: 'Please waiting',
    waitingInfo: 'Generating ONT ID，please waiting...',
    registerWrong: 'Sign up ONT ID failed!',
    pleaseCheck: 'Please try again.'
  },
  registerSuccess : {
    success : 'Sign up success.',
    saveWallet: 'Please save your encrypted ONT ID file (Keystore) in a secure place.',
    privateKey_1: 'Please make sure no one is watching',
    privateKey_2: 'and there is no camera around',
    address: '3. Your address.',
    download: 'Download',
    next : 'Next',
    notice : 'Notice',
    info : 'Please make sure that you have downloaded your ONT ID file and backed up the private key.',
    go2Login : 'Sign in',
    cancel : 'Cancel',
    saveFile:'1 Save ONT ID File',
    savePrivateKey: '2 Save Private Key',
    copy:'Copy',
    display:'Click to display'
  },
  recovery: {
    recovery: 'Recover Your ONT ID',
    privateKey: 'private key',
    enterPrivateKey: 'Enter PrivateKey',
    enterPassword: 'Enter Password',
    enterPasswordAgain: 'Repeat Password',
    waiting: 'Please waiting',
    waitingInfo: 'Generating ONT ID，please waiting...',
    recoveryWrong: 'Restore ONT ID failed!',
    pleaseCheck: 'Please check whether the input private key is correct.'
  },
  login: {
    login: 'Sign In',
    open: 'Unlock',
    enterPassword: 'Enter password',
    waiting: 'Please waiting',
    waitingInfo: 'Unlocking，please waiting...',
    chooseFile: 'Choose File',
    browse: 'Browse',
    unlockWrong: 'Unlock failed!Please check whether the ONT ID file or password is correct.',
    pleaseCheck: 'Please check whether the ONT ID file or password is correct.',
    NOT_SUPPORTED_WALLET: 'Not supported wallet. Please sign up and try again.',
    INVALID_WALLET: 'Invalid wallet file.',
    signUp:'Sign Up',
    thirdParty:'---------------- Third party account login ----------------',
    loginInfo_1:'Forget your password?',
    loginInfo_2:'Recover it with your private key here',
  },
  githubLogin: {
    waiting: 'Sign in now, please wait....',
    returnToHome: 'Return to ',
    homePage: 'Home'
  },
  projectList:{
    createAndRun: 'Create and Run',
    createProject: 'Create Project',
    openABI: 'Open ABI File',
    runProject: 'Run Project',
    noProject:'No Project',
    Link: 'Link',
    edit: 'Edit',
    delete: 'Delete',
    cancel: 'Cancel',
    myProjectList: 'My Project List',
    waiting:'Please waiting',
    waitingInfo: 'Loading project list,please waiting...',
    waitingDelete: 'Deleting project，please waiting...',
    notice:'Attention',
    noticeDelete:'Are you sure you want to permanently delete this project?',
    ok:'Yes',
  },
  createSc: {
    chooseTemplate: 'Select a smart contract template',
    pleaseSelect:'Website template - please select',
    autoTransfer: 'Automatic transfer',
    inputScName:'Enter your smart contract name',
    scName:'Smart contract name',
    ok:'Ok',
    waiting:'Please waiting',
    waitingInfo: 'Generating smart contract project，please waiting...',
    errorForSelect: 'Please select smart contract template.',
    null:'Blank',
    createProjectFail: 'Failure',
    createProjectFailInfo: 'The project name already exists, please rename.'
  },
  openABIFile:{
    inputScName:'Enter your smart contract name',
    chooseAbiFile: 'Choose your ABI file.',
    scName:'Smart contract name',
    abiFileName: 'ABI file' ,
    inputLanguage: 'Choose your smart contract language',
    projectNameExist: 'The project name already exists, please rename.',
    openAbiFileFail:'Failed to open ABI file: file format is incorrect.',
    contractHashWrong:'Failed to open ABI file: contract hash is wrong'
  },
  selectLanguage: {
    pleaseSelect: 'Select a programming language for smart contract'
  },
  searchProject: {
    loadSc: 'Loading smart contract',
    inputTxid: 'Input contract TXID',
    openFile: 'Open ABI File',
    inputScName:'Enter your smart contract name',
    scName:'Smart contract name',
    ok:'Ok'
  },
  projectOperation: {
    config: 'Config',
    compile: 'Compile',
    deploy: 'Deploy',
    run: 'Run',
    tool:'Tool',
    test:'Test',
    restful:'Restful',
    compileTooltips: 'Compile the code to generate ABI and AVM.',
    deployTooltips: 'Deploy the compiled contract to the blockchain.',
    runTooltips: 'Running contract method'
  },
  config: {
    applyOng: 'Apply TestNet ONG'
  },
  compile: {
    compile: 'Compile',
    waiting: 'Waiting...',
    abi: 'ABI',
    outputInfo: 'AVM Byte code',
    opCode: 'Opcode',
    next: 'Next',
    name: 'Name',
    value: 'Value',
    noData: 'No Data',
    copy: 'Copy',
    save: 'Save',
    hash: 'Contract hash:',
    entryPoint: 'Entrypoint:',
    functionList: 'Function List:',
    compileTooltips: 'Compile the code to generate ABI and AVM.',
    abiTooltips: 'The ABI file, including the hash value and method list compiled by the code, can be saved.',
    nvmTooltips: 'AVM binary code,can be copy.',
    entrance:'The entrance:',
    methodsList: 'Methods list',
    addABIFunction: 'Add a list of ABI methods',
    functionName: 'Function name:',
    close: 'Close',
    add: 'Add'
  },
  deploy: {
    selectWallet: 'Select Wallet File',
    generateWallet:'Generate Wallet',
    walletInfo: 'Wallet Info',
    chooseFile: 'Choose File',
    Browse: 'Browse',
    enterPw: 'Enter password',
    close: 'Close',
    unlock: 'Unlock',
    address: 'Address:',
    asset: 'Asset:',
    payFee: 'Pay Fee',
    info: 'Information',
    name: 'Name: ',
    version: 'Version: ',
    author: 'Author: ',
    email: 'Email: ',
    desc: 'Desc: ',
    result: 'Result',
    deploy: 'Deploy',
    noData: 'No Data',
    betaTestAsset: 'Beta test, not yet available',
    waiting: 'Waiting...',
    waitingUnlock: 'Waiting...',
    deployed : 'Deployed successful.',
    errorTitle: 'Deployed Failure',
    errorCompile: 'You need to compile first.',
    errorWallet: 'You need to select your wallet first.',
    errowWalletPassword:'The password you enter is wrong',
    infoTooltips: 'Contract information',
    resultTooltips: 'Contract deployment result',
    preDeploy: 'Pre-Deploy',
    preDeploytips: 'Please recompile the code first.',
    emptyInfo: 'Please enter each field of the smart contract information.',
    generate:'Generate',
    waitingGenerate:'Waiting...',
    networkInfo: 'Network info'
  },
  run: {
    selectWallet: 'Select Wallet File',
    generateWallet:'Generate Wallet',
    walletInfo: 'Wallet Info',
    chooseFile: 'Choose File',
    Browse: 'Browse',
    enterPw: 'Enter password',
    close: 'Close',
    unlock: 'Unlock',
    address: 'Address:',
    asset: 'Asset:',
    basicInfo: 'Basic Info',
    option: 'Options',
    selectFuc: 'Select run function: ',
    selectFucOption: 'Select run function',
    run: 'Run',
    contractName: 'Contract Name',
    tradingHash: 'Contract hash: ',
    txid: 'TXID',
    noData: 'No Data',
    betaTestAsset: 'Beta test, not yet available',
    payFee: 'Pay Fee',
    waiting: 'Waiting...',
    waitingUnlock: 'Waiting...',
    errorTitle: 'Running Failure',
    errorWallet: 'You need to unlock your wallet first.',
    errorFunction: 'You need to select one function to run.',
    noContractHash: 'No contract hash.Please deploy your contract first.',
    noFunction:'Please add the function to run',
    function:'Function:',
    param:'Params:',
    debugRun:'Debug Run',
    preRun:'Pre-Run',
    preRuntips: 'Use Pre-Run to invoke query method or get the gas limit of the contract',
  },
  tool:{
    transform: 'Transform',
    clear:'Clear',
    check: 'Check'
  },
  test:{
    account:'Account',
    accountPrivateKey:'Account private key:',
    accountAddress:'Account',
    ok:'Ok',
    addAccount:'Add Account',
    editAccount:'Edit Account',
    errorPrivateKey:'Private Key Error',
    errorPrivateKeyContent:'Private key input error, please enter again',
    testFunction:'Test Function',
    selectAccount:'Select Sign Account',
    addFunction:'Add Function',
    runThisFunc:'Running this function',
    preRunThisFunc:'Pre-Running this function',
    multiSign:'Multi-signature(Comming soon)',
    function:'Function',
    selectNet:'Select Network:',
    mainNet:'Main net',
    testNet:'Test net',
    privateNet:'Private net:',
    selectRunType:'Select Run Type:',
    run:'Run',
    preRun:'Pre-run',
    runError:'Run Error',
    download:'Download',
    save:'Save',
    edit:'Edit',
    cancel:'Cancel',
    delete:'Delete',
    noAccountError_1:'Please select a signed account for function ',
    selectContractHash:'Select Contract Hash:',
    currentContractHash:'Current Contract Hash',
    Other:'Other',
    contractHashError:'There is a mistake in the contract you entered'
  },
  restful:{
    modelSuccessTitle:'Results',
    ok:'OK',
    waiting:'Connecting...',
    errorTitle:'Connecting failed',
    errorContent:'Connecting failed.Please check the network',
    noValue:'Please enter parameters',
    send:'Send',
    privateNet:'Cyano Net:'
  },
  project: {
    event: 'Event',
    logs: 'Logs',
    evaluationStack: 'Evaluation Stack',
    altStack: 'Alt Stack',
    history: 'History',
    locals: 'Locals',
    storage: 'Storage',
    continue: 'Continue (F9)',
    stop: 'Debug Stop',
    stepOverOpcode: 'Step Over Opcode (F7)',
    stepOverLine: 'Step Over Line (F8)',
    clearLogs : 'Clear',
    textFormat:'Text Format',
    wasmOutput:'Wasm Output'
  },
  ide:{
    annotation: 'Use CTRL+ALT+H to acess the hotkeys informations, F2 to toggle breakpoint, F8 to step over and F9 to continue',
    file: 'File',
    open: 'Open...',
    save: 'Save',
    fileWrong: 'File type error, unable to open.',
    share: 'Share  social media.',
    waiting: 'Please waiting',
    waitingInfo: 'Loading project,please waiting...',
    editorPopover:'Code editing area',
    editorPopoverInfo:'You can edit the smart contract code here, or you can import an existing code file for editing.',
    operationPopover:'Contract processing area',
    operationPopoverInfo:'You can choose to compile, deploy, and run the code here, and you can view information about the contract.',
    outputPopover:'Log print area',
    outputPopoverInfo:'Your compilation, deployment, and operation of the code will be shown here.',
    noProvider: 'No provider installed.You can install Cyano wallet as provider from Chrome web store.',
    noProviderAccount: 'Please first generate a wallet in the provider of Cyano wallet.',
    deployFalseInProvider: 'The deployment failed. Please check if the wallet has enough balance.',
  },
  projectEditor:{
    modifyWatTitle:'Modify Wat Memory',
    close:'Close',
    Modify: 'Modify',
    watMemory: 'Wat Memory',
    modifyWatMemoryInfo: 'Modify the wat memory（You need to recompile after modification）'
  },
  about:{
    title:'Ontology introduces SmartX, the smart contract tool.',
    content1:'The market has already recognized the functionality and application prospects of smart contracts, but there are nevertheless limitations. Ordinary users are unable to effectively develop radical products and services due to limitations in programming languages and tools, which results in excessive costs for application developers. SmartX was born to solve these problems.',
    content2:'SmartX is a one-stop IDE that can be used to compile, deploy, and invoke smart contracts. It provides a range of smart contract templates and a powerful online editor. Individuals can use SmartX templates or commission community developers to customize contracts. In the future, smart contract developers will be able to trade smart contracts they have written or collaborate with multiple people to develop smart contracts, using their own expertise to profit.',
    content3:'Ontology smart contracts support multiple contract types such as native smart contracts, NeoVM smart contracts, Wasm smart contracts, and more. Currently, SmartX supports NeoVM-based C# and Python, and will support Wasm online compilation functions and additional mainstream programming languages in the future, including Java, Rust, Go, JavaScript, and more.',
    content4:'In the future SmartX will work like GitHub to be a distributed software project code hosting platform. This will support multiple people to participate in and share complex contracts, and at the time same, implement a set of economic incentives and integrate fair governance policies to reflect the contributions of each participant. This will foster smart contract writing, smart contract transactions, collaboration, community building, and an altogether valuable smart contract development ecosystem.'
  },
  setting:{
    title:'Personal Setting',
    ontid:'Ont Id Binding',
    github:'Github Account'
  },
  settingGithub:{
    title:'Your current GitHub account',
    noAccount:'You have not bind your Github account',
    removeBinding:'Remove the binding',
    binding:'Sign in Github and bind',
    bindFalse:'Binding account failed',
    accountExist:'The Github account already exists, please select another account to bind',
    ok:'Ok'
  },
  settingOntId:{
    title:'Your current Ont ID account',
    noAccount:'You have not bind your OntId account',
    removeBinding:'Remove the binding',
    binding:'Binding OntId',
    bindFalse:'Binding account failed',
    accountExist:'The Ont Id account already exists, please select another account to bind',
    ok:'Ok',
    chooseOntId:'Choose OntId File',
    bind:'Binding',
    wait:'Waiting...'
  },
}
