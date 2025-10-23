import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'controllers/theme_controller.dart';
import 'app.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  final themeController = ThemeController();
  await themeController.loadTheme();

  runApp(
    ChangeNotifierProvider.value(
      value: themeController,
      child: const DagimPortfolioApp(),
    ),
  );
}
