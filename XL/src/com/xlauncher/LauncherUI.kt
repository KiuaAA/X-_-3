package com.xlauncher

import java.awt.*
import java.awt.event.ActionEvent
import javax.swing.*

class LauncherUI {
    private val frame = JFrame("X-_-3 Launcher")

    init {
        initializeUI()
    }

    private fun initializeUI() {
        frame.defaultCloseOperation = JFrame.EXIT_ON_CLOSE
        frame.setSize(1200, 800)
        frame.layout = BorderLayout()

        // Claude-inspired dark theme colors
        val bg = Color(26, 26, 46)        // #1a1a2e
        val surface = Color(22, 33, 62)   // #16213e
        val primary = Color(15, 76, 117)  // #0f4c75
        val accent = Color(50, 130, 184)  // #3282b8
        val text = Color(230, 230, 230)   // #e6e6e6

        val mainPanel = JPanel()
        mainPanel.layout = BoxLayout(mainPanel, BoxLayout.Y_AXIS)
        mainPanel.background = bg

        // Header
        val headerPanel = JPanel()
        headerPanel.background = surface
        val titleLabel = JLabel("X-_-3 Launcher")
        titleLabel.foreground = accent
        titleLabel.font = Font("Segoe UI", Font.BOLD, 24)
        headerPanel.add(titleLabel)
        mainPanel.add(headerPanel)

        // Accounts section
        val accountsPanel = createSectionPanel("Accounts", surface, text)
        val offlineBtn = createButton("Offline Account", primary, text)
        val microsoftBtn = createButton("Microsoft Account", primary, text)
        accountsPanel.add(offlineBtn)
        accountsPanel.add(microsoftBtn)
        mainPanel.add(accountsPanel)

        // Versions section
        val versionsPanel = createSectionPanel("Minecraft Versions", surface, text)
        val versionList = JList(arrayOf("1.20.1", "1.19.4", "1.18.2"))
        versionList.background = Color(255, 255, 255, 5)
        versionList.foreground = text
        val scrollPane = JScrollPane(versionList)
        versionsPanel.add(scrollPane)
        mainPanel.add(versionsPanel)

        // Mods section
        val modsPanel = createSectionPanel("Mods", surface, text)
        val modManagerBtn = createButton("Open Mod Manager", primary, text)
        modsPanel.add(modManagerBtn)
        mainPanel.add(modsPanel)

        // Launch button
        val launchBtn = createButton("Launch Minecraft", primary, text)
        mainPanel.add(launchBtn)

        // Event handlers (stubs)
        offlineBtn.addActionListener { showMessage("Offline Account", "Offline account feature not yet implemented.") }
        microsoftBtn.addActionListener { showMessage("Microsoft Account", "Microsoft account login not yet implemented.") }
        modManagerBtn.addActionListener { showMessage("Mod Manager", "Mod manager not yet implemented.") }
        launchBtn.addActionListener { showMessage("Launch", "Launch logic not yet implemented.") }

        frame.add(mainPanel, BorderLayout.CENTER)
    }

    private fun createSectionPanel(title: String, bg: Color, textColor: Color): JPanel {
        val panel = JPanel()
        panel.layout = FlowLayout()
        panel.background = bg
        val label = JLabel(title)
        label.foreground = textColor
        panel.add(label)
        return panel
    }

    private fun createButton(text: String, bg: Color, fg: Color): JButton {
        val button = JButton(text)
        button.background = bg
        button.foreground = fg
        return button
    }

    private fun showMessage(title: String, message: String) {
        JOptionPane.showMessageDialog(frame, message, title, JOptionPane.INFORMATION_MESSAGE)
    }

    fun show() {
        frame.isVisible = true
    }
}
