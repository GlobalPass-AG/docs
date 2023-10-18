"use strict";(self.webpackChunkglobalpass_docs=self.webpackChunkglobalpass_docs||[]).push([[258],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(k,i(i({ref:n},p),{},{components:t})):r.createElement(k,i({ref:n},p))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8831:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={hide_table_of_contents:!0},i="React Native",l={unversionedId:"ios-sdk/react-native/react-native",id:"ios-sdk/react-native/react-native",title:"React Native",description:"Latest GlobalPass iOS SDK version: 1.11",source:"@site/docs/ios-sdk/react-native/react-native.md",sourceDirName:"ios-sdk/react-native",slug:"/ios-sdk/react-native/",permalink:"/ios-sdk/react-native/",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"iosSdkSidebar",previous:{title:"Native",permalink:"/ios-sdk/native/"}},s={},c=[{value:"1. Manual installation step-by-step",id:"1-manual-installation-step-by-step",level:2},{value:"a. Clone the repository",id:"a-clone-the-repository",level:3},{value:"b. Open React Native project&#39;s iOS .xcworkspace file",id:"b-open-react-native-projects-ios-xcworkspace-file",level:3},{value:"c. Select context menu on <code>Frameworks</code> folder and select <code>Add files to \u2026</code>",id:"c-select-context-menu-on-frameworks-folder-and-select-add-files-to-",level:3},{value:"d. Choose the <code>GlobalPass.xcframework</code> folder and click <code>Add</code>",id:"d-choose-the-globalpassxcframework-folder-and-click-add",level:3},{value:"e. You can now build the project",id:"e-you-can-now-build-the-project",level:3},{value:"2. CocoaPods installation step-by-step",id:"2-cocoapods-installation-step-by-step",level:2},{value:"a. Edit Podfile",id:"a-edit-podfile",level:3},{value:"b. Install Cocoa Pods in Terminal",id:"b-install-cocoa-pods-in-terminal",level:3},{value:"3. Project setup",id:"3-project-setup",level:2},{value:"Paste the following lines to <code>Info.plist</code>",id:"paste-the-following-lines-to-infoplist",level:3},{value:"Usage",id:"usage",level:2},{value:"React side",id:"react-side",level:3},{value:"iOS side",id:"ios-side",level:3},{value:"Localisation",id:"localisation",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react-native"},"React Native"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Latest GlobalPass iOS SDK version: ",(0,o.kt)("strong",{parentName:"p"},"1.11"))),(0,o.kt)("h2",{id:"1-manual-installation-step-by-step"},"1. Manual installation step-by-step"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can follow the manual installation steps below or use CocoaPods to install dependencies. For the latter, see ",(0,o.kt)("a",{parentName:"p",href:"#2-cocoapods-installation-step-by-step"},"CocoaPods installation step-by-step"),".")),(0,o.kt)("h3",{id:"a-clone-the-repository"},"a. Clone the repository"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://isun-ag@dev.azure.com/isun-ag/GlobalPassApp-Public/_git/GlobalPassApp-sdk-ios-binaries"},"https://isun-ag@dev.azure.com/isun-ag/GlobalPassApp-Public/","_","git/GlobalPassApp-sdk-ios-binaries")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The cloned repository contains ",(0,o.kt)("inlineCode",{parentName:"p"},"GlobalPass.xcframework")," folder which should be copied to ",(0,o.kt)("strong",{parentName:"p"},"React Native")," project's ",(0,o.kt)("inlineCode",{parentName:"p"},"ios")," folder. See the example below:")),(0,o.kt)("h3",{id:"b-open-react-native-projects-ios-xcworkspace-file"},"b. Open React Native project's iOS .xcworkspace file"),(0,o.kt)("h3",{id:"c-select-context-menu-on-frameworks-folder-and-select-add-files-to-"},"c. Select context menu on ",(0,o.kt)("inlineCode",{parentName:"h3"},"Frameworks")," folder and select ",(0,o.kt)("inlineCode",{parentName:"h3"},"Add files to \u2026")),(0,o.kt)("h3",{id:"d-choose-the-globalpassxcframework-folder-and-click-add"},"d. Choose the ",(0,o.kt)("inlineCode",{parentName:"h3"},"GlobalPass.xcframework")," folder and click ",(0,o.kt)("inlineCode",{parentName:"h3"},"Add")),(0,o.kt)("h3",{id:"e-you-can-now-build-the-project"},"e. You can now build the project"),(0,o.kt)("h2",{id:"2-cocoapods-installation-step-by-step"},"2. CocoaPods installation step-by-step"),(0,o.kt)("h3",{id:"a-edit-podfile"},"a. Edit Podfile"),(0,o.kt)("p",null,"Add plugin to the beginning of Podfile:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"plugin 'cocoapods-azure-universal-packages', {\n  :organization => 'https://dev.azure.com/isun-ag'\n}\n")),(0,o.kt)("p",null,"Provide ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," urls:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"source 'https://cdn.cocoapods.org'\nsource 'https://dev.azure.com/isun-ag/GlobalPassApp-Public/_git/GlobalPassApp-sdk-ios-private-specs'\n")),(0,o.kt)("p",null,"and required dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"pod 'GlobalPass', '~> 1.11'\npod 'FaceTecSDK', :http => 'https://dev.azure.com/isun-ag/368936e7-5cb5-4092-96c5-fe9942e2c3e1/_apis/packaging/feeds/FaceTecSDK/upack/packages/facetecsdk/versions/0.0.2'\n")),(0,o.kt)("h3",{id:"b-install-cocoa-pods-in-terminal"},"b. Install Cocoa Pods in Terminal"),(0,o.kt)("p",null,"Run the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ brew update && brew install azure-cli\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ az devops login\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"When asked for credentials, put the ",(0,o.kt)("strong",{parentName:"p"},"repository access token")," you were provided by GlobalPass.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gem install cocoapods-azure-universal-packages\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ pod install\n")),(0,o.kt)("h2",{id:"3-project-setup"},"3. Project setup"),(0,o.kt)("h3",{id:"paste-the-following-lines-to-infoplist"},"Paste the following lines to ",(0,o.kt)("inlineCode",{parentName:"h3"},"Info.plist")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="Info.plist"',title:'"Info.plist"'},"<key>NFCReaderUsageDescription</key>\n<string>Provide you description here</string>\n<key>NSCameraUsageDescription</key>\n<string>Provide you description here</string>\n<key>NSLocationWhenInUseUsageDescription</key>\n<string>Provide you description here</string>\n<key>com.apple.developer.nfc.readersession.iso7816.select-identifiers</key>\n<array>\n<string>A0000002471001</string>\n<string>A0000002472001</string>\n<string>00000000000000</string>\n</array>\n")),(0,o.kt)("admonition",{title:"important",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please change the descriptions under ",(0,o.kt)("inlineCode",{parentName:"p"},"NFCReaderUsageDescription"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NSCameraUsageDescription")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"NSLocationWhenInUseUsageDescription")," in the file above. This is important to pass ",(0,o.kt)("strong",{parentName:"p"},"App Store")," review process for your application.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react-side"},"React side"),(0,o.kt)("p",null,"There is a type named ",(0,o.kt)("inlineCode",{parentName:"p"},"GPFacade"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { GPFacade } = NativeModules;\n")),(0,o.kt)("p",null,"This type has methods that provide flows and environments to interact with GlobalPass:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"buildKYCDev")," - takes a screening token and runs screening flow in dev environment"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"buildKYCProd")," - takes a screening token and runs screening flow in prod environment"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"buildIBDev")," - takes an instant biometrics ID and runs instant biometrics flow in dev environment"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"buildIBProd")," - takes an instant biometrics ID and runs instant biometrics flow in prod environment")),(0,o.kt)("h3",{id:"ios-side"},"iOS side"),(0,o.kt)("p",null,"Methods above are represented in Objective-C by following signatures:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},'RCT_EXPORT_METHOD(buildKYCDev:(NSString *)screeningToken\n                  resolver:(RCTPromiseResolveBlock)resolve\n                  rejecter:(RCTPromiseRejectBlock)reject) {\n  NSError *error;\n\n  VoidClosure callback = [GlobalPassSDK setupScreeningWithEnvironment:GlobalPassEnvironmentDev\n                                                       screeningToken:screeningToken\n                                                                error:&error];\n\n  if (error != nil) {\n    reject(@"0", @"GlobalPass", error);\n    return;\n  }\n\n  dispatch_async(dispatch_get_main_queue(), ^{\n    UIViewController *controller = [GlobalPassSDK startScreening];\n\n    controller.modalPresentationStyle = UIModalPresentationOverFullScreen;\n    [[[[[UIApplication sharedApplication] delegate] window] rootViewController] presentViewController:controller animated:YES completion:^{\n\n    }];\n  });\n};\n\nRCT_EXPORT_METHOD(buildKYCProd:(NSString *)screeningToken\n                  resolver:(RCTPromiseResolveBlock)resolve\n                  rejecter:(RCTPromiseRejectBlock)reject) {\n  NSError *error;\n  VoidClosure callback = [GlobalPassSDK setupScreeningWithEnvironment:GlobalPassEnvironmentProd\n                                                       screeningToken:screeningToken\n                                                                error:&error];\n\n  if (error != nil) {\n    reject(@"0", @"GlobalPass", error);\n    return;\n  }\n\n  dispatch_async(dispatch_get_main_queue(), ^{\n    UIViewController *controller = [GlobalPassSDK startScreening];\n    controller.modalPresentationStyle = UIModalPresentationOverFullScreen;\n    [[[[[UIApplication sharedApplication] delegate] window] rootViewController] presentViewController:controller animated:YES completion:^{\n\n    }];\n  });\n};\n\nRCT_EXPORT_METHOD(buildIBDev:(NSString *)instantBiometricsID\n                  resolver:(RCTPromiseResolveBlock)resolve\n                  rejecter:(RCchTPromiseRejectBlock)reject) {\n  NSError *error;\n  VoidClosure callback = [GlobalPassSDK setupInstantWithEnvironment:GlobalPassEnvironmentDev\n                                                instantBiometricsId:instantBiometricsID\n                                                              error:&error];\n\n  if (error != nil) {\n    reject(@"0", @"GlobalPass", error);\n    return;\n  }\n\n  dispatch_async(dispatch_get_main_queue(), ^{\n    UIViewController *controller = [GlobalPassSDK startInstant];\n    controller.modalPresentationStyle = UIModalPresentationOverFullScreen;\n    [[[[[UIApplication sharedApplication] delegate] window] rootViewController] presentViewController:controller animated:YES completion:^{\n\n    }];\n  });\n};\n\nRCT_EXPORT_METHOD(buildIBProd:(NSString *)instantBiometricsID\n                  resolver:(RCTPromiseResolveBlock)resolve\n                  rejecter:(RCTPromiseRejectBlock)reject) {\n  NSError *error;\n  VoidClosure callback = [GlobalPassSDK setupInstantWithEnvironment:GlobalPassEnvironmentProd\n                                                instantBiometricsId:instantBiometricsID\n                                                              error:&error];\n\n  if (error != nil) {\n    reject(@"0", @"GlobalPass", error);\n    return;\n  }\n\n  dispatch_async(dispatch_get_main_queue(), ^{\n    UIViewController *controller = [GlobalPassSDK startInstant];\n    controller.modalPresentationStyle = UIModalPresentationOverFullScreen;\n    [[[[[UIApplication sharedApplication] delegate] window] rootViewController] presentViewController:controller animated:YES completion:^{\n\n    }];\n  });\n};\n\nRCT_EXPORT_METHOD(buildSplitKYCDev:(NSString *)screeningToken\n                  resolver:(RCTPromiseResolveBlock)resolve\n                  rejecter:(RCTPromiseRejectBlock)reject) {\n  NSError *error;\n\n  VoidClosure callback = [GlobalPassSDK setupScreeningWithEnvironment:GlobalPassEnvironmentDev\n                                                       screeningToken:screeningToken\n                                                                error:&error];\n\n  if (error != nil) {\n    reject(@"0", @"GlobalPass", error);\n    return;\n  }\n\n  dispatch_async(dispatch_get_main_queue(), ^{\n    UIViewController *controller = [GlobalPassSDK startSplitScreeningWithType:GPSplitFlowAddress externalID:nil];\n\n    controller.modalPresentationStyle = UIModalPresentationOverFullScreen;\n    [[[[[UIApplication sharedApplication] delegate] window] rootViewController] presentViewController:controller animated:YES completion:^{\n\n    }];\n  });\n};\n\nRCT_EXPORT_METHOD(buildSplitKYCProd:(NSString *)screeningToken\n                  resolver:(RCTPromiseResolveBlock)resolve\n                  rejecter:(RCTPromiseRejectBlock)reject) {\n  NSError *error;\n  VoidClosure callback = [GlobalPassSDK setupScreeningWithEnvironment:GlobalPassEnvironmentProd\n                                                       screeningToken:screeningToken\n                                                                error:&error];\n\n  if (error != nil) {\n    reject(@"0", @"GlobalPass", error);\n    return;\n  }\n\n  dispatch_async(dispatch_get_main_queue(), ^{\n    UIViewController *controller = [GlobalPassSDK startSplitScreeningWithType:GPSplitFlowAddress externalID:nil];\n    controller.modalPresentationStyle = UIModalPresentationOverFullScreen;\n    [[[[[UIApplication sharedApplication] delegate] window] rootViewController] presentViewController:controller animated:YES completion:^{\n\n    }];\n  });\n};\n')),(0,o.kt)("p",null,"Each of the calls to ",(0,o.kt)("inlineCode",{parentName:"p"},"GlobalPassSDK")," facade that starts with ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," returns an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"UIViewController")," that should be presented over a root view controller of a window."),(0,o.kt)("p",null,"Call to methods that start with ",(0,o.kt)("inlineCode",{parentName:"p"},"setup")," returns an empty closure that should be called at the end of GlobalPass flow in order to clean up all the resources and indicate a finish."),(0,o.kt)("p",null,"Pass ",(0,o.kt)("inlineCode",{parentName:"p"},"externalID")," to associate custom string with the KYC session."),(0,o.kt)("h2",{id:"localisation"},"Localisation"),(0,o.kt)("p",null,"To specify the required SDK display language, provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"localeIdentifier")," parameter with a string value containing the locale identifier in the function call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},'RCT_EXPORT_METHOD(buildSplitKYCProd:(NSString *)screeningToken\n                   localeIdentifier:(NSString *)locale\n                           resolver:(RCTPromiseResolveBlock)resolve\n                           rejecter:(RCTPromiseRejectBlock)reject) {\n  NSError *error;\n  VoidClosure callback = [GlobalPassSDK setupScreeningWithEnvironment:GlobalPassEnvironmentProd\n                                                       screeningToken:screeningToken\n                                                     localeIdentifier:locale\n                                                                error:&error];\n  if (error != nil) {\n    reject(@"0", @"GlobalPass", error);\n    return;\n  }\n\n  dispatch_async(dispatch_get_main_queue(), ^{\n    UIViewController *controller = [GlobalPassSDK startSplitScreeningWithType:GPSplitFlowAddress externalID:nil];\n    controller.modalPresentationStyle = UIModalPresentationOverFullScreen;\n    [[[[[UIApplication sharedApplication] delegate] window] rootViewController] presentViewController:controller animated:YES completion:^{\n\n    }];\n  });\n};\n')),(0,o.kt)("p",null,"Available locales:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"English (",(0,o.kt)("inlineCode",{parentName:"li"},"en"),")"),(0,o.kt)("li",{parentName:"ul"},"German (",(0,o.kt)("inlineCode",{parentName:"li"},"de"),")"),(0,o.kt)("li",{parentName:"ul"},"Russian (",(0,o.kt)("inlineCode",{parentName:"li"},"ru"),")"),(0,o.kt)("li",{parentName:"ul"},"Chinese Simplified (",(0,o.kt)("inlineCode",{parentName:"li"},"zh-CN"),")"),(0,o.kt)("li",{parentName:"ul"},"Lithuanian (",(0,o.kt)("inlineCode",{parentName:"li"},"lt"),")")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If an unsupported locale will be provided, the SDK will fallback to English.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"localeIdentifier")," parameter is defined for static builders and initialisers. Use the method without this parameter to use default English localisation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Builders\n\nsetupInstantWithEnvironment:instantBiometricsId:error: // Default English\nsetupInstantWithEnvironment:instantBiometricsId:localeIdentifier:error: // Provided Localisation\nsetupScreeningWithEnvironment:screeningToken:error: // Default English\nsetupScreeningWithEnvironment:screeningToken:localeIdentifier:error: // Provided Localisation\n\n// Initialisers\n\ninitWithEnvironment:screeningToken:error: // Default English\ninitWithEnvironment:screeningToken:localeIdentifier:error: // Provided Localisation\ninitWithEnvironment:instantBiometricsId:error: // Default English\ninitWithEnvironment:instantBiometricsId:localeIdentifier:error: // Provided Localisation\n")))}u.isMDXComponent=!0}}]);