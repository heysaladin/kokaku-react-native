package com.kokaku;

import android.app.Application;

import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import com.wix.interactable.Interactable;
import com.reactnative.photoview.PhotoViewPackage;
import com.imagepicker.ImagePickerPackage;
import fr.bamlab.rnimageresizer.ImageResizerPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.kishanjvaghela.cardview.RNCardViewPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {
    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new VectorIconsPackage(),
            new Interactable(),
            new PhotoViewPackage(),
            new ImagePickerPackage(),
            new ImageResizerPackage(),
            new LinearGradientPackage(),
            new RNCardViewPackage()
        );
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return getPackages();
    }
}
